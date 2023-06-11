import { bytesToPrefixedHexString } from '@ethereumjs/util'
import debug from 'debug'

import { nibblestoBytes } from './nibbles'

/**
 * Prepends hex prefix to an array of nibbles.
 * @param key - Array of nibbles
 * @returns returns buffer of encoded data
 **/
export function addHexPrefix(_key: number[], terminator: boolean): number[] {
  const key = [..._key]
  // odd
  if (key.length % 2) {
    key.unshift(1)
  } else {
    // even
    key.unshift(0)
    key.unshift(0)
  }

  if (terminator) {
    key[0] += 2
  }

  return key
}

/**
 * Removes hex prefix of an array of nibbles.
 * @param val - Array of nibbles
 * @private
 */
export function removeHexPrefix(_val: number[]): number[] {
  debug('removeHexPrefix').extend(`PRE: [${_val.length}]`)(_val)
  debug('removeHexPrefix').extend(`PRE: [${_val.length}]`)(
    bytesToPrefixedHexString(nibblestoBytes(_val))
  )
  let val = [..._val]
  if (val[0] % 2) {
    val = val.slice(1)
  } else {
    val = val.slice(2)
  }
  debug('removeHexPrefix').extend(`POST: [${val.length}]`)(val)
  debug('removeHexPrefix').extend(`POST: [${val.length}]`)(
    bytesToPrefixedHexString(nibblestoBytes(val))
  )

  return val
}

/**
 * Returns true if hex-prefixed path is for a terminating (leaf) node.
 * @param key - a hex-prefixed array of nibbles
 * @private
 */
export function isTerminator(key: number[]): boolean {
  return key[0] > 1
}
