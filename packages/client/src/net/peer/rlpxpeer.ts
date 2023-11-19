import {
  ETH as Devp2pETH,
  LES as Devp2pLES,
  RLPx as Devp2pRLPx,
  SNAP as Devp2pSNAP,
} from '@ethereumjs/devp2p'
import { randomBytes, unprefixedHexToBytes } from '@ethereumjs/util'

import { Event } from '../../types'
import { RlpxSender } from '../protocol'

import { Peer } from './peer'

import type { EthProtocol, LesProtocol, Protocol, SnapProtocol } from '../protocol'
import type { RlpxServer } from '../server'
import type { PeerOptions } from './peer'
import type { Capabilities as Devp2pCapabilities, Peer as Devp2pRlpxPeer } from '@ethereumjs/devp2p'
const devp2pCapabilities = {
  snap1: Devp2pSNAP.snap,
  eth66: Devp2pETH.eth66,
  eth67: Devp2pETH.eth67,
  eth68: Devp2pETH.eth68,
  les2: Devp2pLES.les2,
  les3: Devp2pLES.les3,
  les4: Devp2pLES.les4,
}

export interface RlpxPeerOptions extends Omit<PeerOptions, 'address' | 'transport'> {
  /* Peer hostname or ip address */
  host: string

  /* Peer port */
  port: number
}

/**
 * Devp2p/RLPx peer
 * @memberof module:net/peer
 * @example
 * ```typescript
 * import { RlpxPeer } from './src/net/peer'
 * import { Chain } from './src/blockchain'
 * import { EthProtocol } from './src/net/protocol'
 *
 * const chain = await Chain.create()
 * const protocols = [ new EthProtocol({ chain })]
 * const id = '70180a7fcca96aa013a3609fe7c23cc5c349ba82652c077be6f05b8419040560a622a4fc197a450e5e2f5f28fe6227637ccdbb3f9ba19220d1fb607505ffb455'
 * const host = '192.0.2.1'
 * const port = 12345
 *
 * new RlpxPeer({ id, host, port, protocols })
 *   .on('error', (err) => console.log('Error:', err))
 *   .on('connected', () => console.log('Connected'))
 *   .on('disconnected', (reason) => console.log('Disconnected:', reason))
 *   .connect()
 * ```
 */
export class RlpxPeer extends Peer {
  private host: string
  private port: number
  public rlpx: Devp2pRLPx | null
  public rlpxPeer: Devp2pRlpxPeer | null
  public connected: boolean

  // Protocols
  public ETH?: EthProtocol
  public SNAP?: SnapProtocol
  public LES?: LesProtocol

  /**
   * Create new devp2p/rlpx peer
   */
  constructor(options: RlpxPeerOptions) {
    const address = `${options.host}:${options.port}`
    super({
      ...options,
      transport: 'rlpx',
      address,
    })

    this.host = options.host
    this.port = options.port
    this.rlpx = null
    this.rlpxPeer = null
    this.connected = false
  }

  /**
   * Return devp2p/rlpx capabilities for the specified protocols
   * @param protocols protocol instances
   */
  static capabilities(protocols: Protocol[]): Devp2pCapabilities[] {
    const capabilities: Devp2pCapabilities[] = []
    for (const protocol of protocols) {
      const { name, versions } = protocol
      const keys = versions.map((v: number) => name + String(v))
      for (const key of keys) {
        const capability = devp2pCapabilities[key as keyof typeof devp2pCapabilities]
        if (capability !== undefined) {
          capabilities.push(capability)
        }
      }
    }
    return capabilities
  }

  /**
   * Initiate peer connection
   */
  async connect(): Promise<void> {
    if (this.connected) {
      return
    }
    const key = randomBytes(32)
    await Promise.all(this.protocols.map((p) => p.open()))
    this.rlpx = new Devp2pRLPx(key, {
      capabilities: RlpxPeer.capabilities(this.protocols),
      common: this.config.chainCommon,
    })
    await this.rlpx.connect({
      id: unprefixedHexToBytes(this.id),
      address: this.host,
      tcpPort: this.port,
    })

    const peerErrorHandler = (_: Devp2pRlpxPeer, error: Error) => {
      this.config.events.emit(Event.PEER_ERROR, error, this)
    }
    const peerErrorHandlerBound = peerErrorHandler.bind(this)
    const peerAddedHandler = async (rlpxPeer: Devp2pRlpxPeer) => {
      try {
        // TODO await this.bindProtocols(rlpxPeer)
        this.config.events.emit(Event.PEER_CONNECTED, this)
      } catch (error: any) {
        this.config.events.emit(Event.PEER_ERROR, error, this)
      }
    }
    const peerRemovedHandler = (rlpxPeer: Devp2pRlpxPeer) => {
      if (rlpxPeer !== this.rlpxPeer) {
        return
      }
      this.rlpxPeer = null
      this.connected = false
      this.config.events.emit(Event.PEER_DISCONNECTED, this)
      this.rlpx?.events.removeListener('peer:error', peerErrorHandlerBound)
    }
    this.rlpx.events.on('peer:error', peerErrorHandlerBound)
    this.rlpx.events.once('peer:added', peerAddedHandler.bind(this))
    this.rlpx.events.once('peer:removed', peerRemovedHandler.bind(this))
  }

  /**
   * Accept new peer connection from an rlpx server
   */
  async accept(rlpxPeer: Devp2pRlpxPeer, server: RlpxServer): Promise<void> {
    if (this.connected) {
      return
    }
    // TODO await this.bindProtocols(rlpxPeer)
    this.server = server
  }

  availableProtocols(): string[] {
    const available = []
    if (this.ETH !== undefined) {
      available.push('ETH')
    }
    if (this.SNAP !== undefined) {
      available.push('SNAP')
    }
    if (this.LES !== undefined) {
      available.push('LES')
    }
    return available
  }

  async handleMessageQueue(): Promise<void> {
    for (const protocol of [this.ETH, this.LES, this.SNAP]) {
      if (protocol !== undefined) {
        protocol.handleMessageQueue()
      }
    }
  }

  /**
   * Adds protocols to this peer given an rlpx native peer instance.
   * @param rlpxPeer rlpx native peer
   */
  /*private async bindProtocols(rlpxPeer: Devp2pRlpxPeer): Promise<void> {
    this.rlpxPeer = rlpxPeer
    await Promise.all(
      rlpxPeer.getProtocols().map((rlpxProtocol) => {
        const name = rlpxProtocol.constructor.name.toLowerCase()
        const protocol = this.protocols.find((p) => p.name === name)
        // TODO cant we use same `sender` for each protocol?
        const sender = new RlpxSender(rlpxProtocol as Devp2pETH | Devp2pLES | Devp2pSNAP)
        if (protocol !== undefined) {
          return protocol.bind(this, sender)
        }
      })
    )
    this.connected = true
  }*/
}
