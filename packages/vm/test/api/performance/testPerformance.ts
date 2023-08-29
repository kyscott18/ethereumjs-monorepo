import { Chain, Common, Hardfork } from '@ethereumjs/common'
import { FeeMarketEIP1559Transaction } from '@ethereumjs/tx'
import { Account, Address, hexToBytes } from '@ethereumjs/util'
import { VM } from '@ethereumjs/vm'

import type { FeeMarketEIP1559TxData } from '@ethereumjs/tx'

function createAccount(nonce = BigInt(0), balance = BigInt('0xffffffffffffff')) {
  return new Account(nonce, balance)
}

async function runProfiler(
  title: string,
  codeStr: string,
  opts?: {
    loopCnt?: number
    gas?: bigint
    stepLog?: boolean
  }
) {
  const loopCnt = opts?.loopCnt
  const gas = opts?.gas ?? BigInt(0xffffffff)
  const common = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.Cancun })
  const vm = await VM.create({
    common,
    profilerOpts: {
      reportProfilerAfterTx: true,
    },
  })
  const privateKey = hexToBytes(
    '0xe331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109'
  )

  const code = hexToBytes(codeStr)
  const address = new Address(hexToBytes('0x00000000000000000000000000000000000000ff'))
  await vm.stateManager.putContractCode(address, code)

  const str = loopCnt === undefined ? '0x' : '0x' + loopCnt.toString(16).padStart(64, '0')

  const txParams: FeeMarketEIP1559TxData = {
    gasLimit: gas,
    maxFeePerGas: 7,
    maxPriorityFeePerGas: 0,
    to: address,
    data: str,
  }

  const tx = FeeMarketEIP1559Transaction.fromTxData(txParams, { common }).sign(privateKey)

  await vm.stateManager.putAccount(tx.getSenderAddress(), createAccount())

  let cstr = 'Profile: ' + title

  if (loopCnt !== undefined) {
    cstr += ' (loops: ' + loopCnt + ')'
  }
  if (gas !== undefined) {
    cstr += ' (gas: ' + Number(gas) + ')'
  }

  // eslint-disable-next-line
  console.log(cstr)

  if (opts?.stepLog === true) {
    vm.evm.events?.on('step', (e) => {
      // eslint-disable-next-line
      console.log(e.opcode.name, e.stack)
    })
  }

  const time = performance.now()
  const result = await vm.runTx({ tx }) // this tx will fail, but we have to ensure that the cache is cleared
  const used = (performance.now() - time) / 1000

  const egas = result.execResult.executionGasUsed

  // eslint-disable-next-line
  console.log(`gas: ${egas}, time: ${used}, Mgas/s: ${Number(egas) / used / 1e6}`)
}

/**
 * Test: JUMP to JUMPDEST for CALLDATA amount of times
 */
async function testJUMPDEST_Loop() {
  let codeStr = '0x6000355B'
  codeStr += '6001900380'
  codeStr += '60001415'
  codeStr += '6003'
  codeStr += '57'
  codeStr += '00'

  await runProfiler('JUMPDEST loop with SUB', codeStr, {
    loopCnt: 1e5,
  })
}

/**
 * Test: infinitely loop DUP JUMP JUMPDEST
 */
async function testJUMPDEST() {
  const codeStr = '0x60025B8056'
  await runProfiler('JUMPDEST loop with SUB', codeStr, {
    gas: BigInt(1e7),
  })
}

async function tests() {
  await testJUMPDEST_Loop()
  await testJUMPDEST()
}

// eslint-disable-next-line
tests()