window.BENCHMARK_DATA = {
  "lastUpdate": 1696022430294,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "acd1bbbcb436f8e3f137e06b7f85271424e5cd09",
          "message": "Return '0x' values as '0x0' (#3038)\n\n* Return '0x' values as '0x0' since this is a JSON RPC response\r\n\r\n* Add test for checking quantity-encoded RPC representation\r\n\r\n* statemanager: add extra test for edge-case accounts for proofs\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2023-09-19T19:12:59+02:00",
          "tree_id": "74a45e121912d9dfe76c7b94454ba55764ca126f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/acd1bbbcb436f8e3f137e06b7f85271424e5cd09"
        },
        "date": 1695144601309,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31966,
            "range": "±4.41%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31153,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31056,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26931,
            "range": "±9.31%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29487,
            "range": "±2.78%",
            "unit": "ops/sec",
            "extra": "88 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f711d02e73ff66145e232599598bd39a37a6665",
          "message": "VM/EVM profiler: add summary, add Blocks per Slot normalized field (#3041)\n\n* vm/evm: profiler: add general performance overview\r\n\r\n* vm: add logger comments",
          "timestamp": "2023-09-20T02:28:07+02:00",
          "tree_id": "23b201e5bc1d360593ec892654a9f79931b3ed96",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1f711d02e73ff66145e232599598bd39a37a6665"
        },
        "date": 1695170250892,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30084,
            "range": "±5.61%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 29967,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30163,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25019,
            "range": "±10.41%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 28470,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb4a05a62d2f97460dce8ecc121bcd9bfc3ee84b",
          "message": "statemanager: small refactor to get storage objects for snapsync (#3033)",
          "timestamp": "2023-09-20T09:19:46+02:00",
          "tree_id": "b578331b5ea2479bc0995f330769d45277f63dbc",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fb4a05a62d2f97460dce8ecc121bcd9bfc3ee84b"
        },
        "date": 1695194589331,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32193,
            "range": "±4.28%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31500,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31267,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27090,
            "range": "±9.52%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29426,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "88 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "73983677+omahs@users.noreply.github.com",
            "name": "omahs",
            "username": "omahs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80262b6a7a0c053a1b2d0b03d4912e1942dc4951",
          "message": "Fix typos (#3048)\n\n* fix typos\r\n\r\n* fix typos",
          "timestamp": "2023-09-20T10:16:25-04:00",
          "tree_id": "4f27e0ddbe17c3a683f88b4648a749d16d956e00",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/80262b6a7a0c053a1b2d0b03d4912e1942dc4951"
        },
        "date": 1695219784178,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30768,
            "range": "±4.82%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30355,
            "range": "±3.03%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29637,
            "range": "±3.19%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25215,
            "range": "±11.12%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422910",
            "value": 28777,
            "range": "±3.40%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d034e14b0d28efa752fd621eb474183999beed46",
          "message": "monorepo: rename versionedHashes -> blobVersionedHashes (#3043)\n\n* monorepo: rename versionedHashes -> blobVersionedHashes\r\n\r\n* evm: fix browser test\r\n\r\n* add getBlockByNumber test\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-20T13:55:42-04:00",
          "tree_id": "099438d2cbb1d53f4e41e0fa7c32f4481d9d037c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d034e14b0d28efa752fd621eb474183999beed46"
        },
        "date": 1695232852675,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19742,
            "range": "±5.60%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19874,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19281,
            "range": "±3.41%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19707,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18722,
            "range": "±3.48%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66335769+ScottyPoi@users.noreply.github.com",
            "name": "Scotty",
            "username": "ScottyPoi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b13ccade5e02df4460ebfe38f82fec3a942cc97",
          "message": "client/sync: return Promise.race() instead of async-promise-executor (#3030)\n\n* client/sync: use async/await directly instead of async-promise-generator\r\n\r\n* client/sync: use wait for timeout\r\n\r\n* client/sync: externalize resolveSync()\r\n\r\n* client/sync: externalize fetcher sync\r\n\r\n* client:sync: return promise.race\r\n\r\n* client/sync: move wait() to utils\r\n\r\n* Add explanatory comments\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-20T12:50:00-06:00",
          "tree_id": "25187b2284bf314e0a1b36d749fe520e9f79d791",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2b13ccade5e02df4460ebfe38f82fec3a942cc97"
        },
        "date": 1695236167071,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 32282,
            "range": "±4.04%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 31272,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 31187,
            "range": "±2.54%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 26691,
            "range": "±10.40%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29715,
            "range": "±2.70%",
            "unit": "ops/sec",
            "extra": "87 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9389082adeed736774249a995b24c5e0d7d15f28",
          "message": "client: add a cli option for backward compatibility with non prefixed storage tries (#3042)\n\n* client: add a cli option for backward compatibility with non prefixed storage tries\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\n\r\n* Fix comment\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-20T15:37:49-04:00",
          "tree_id": "febeeaf4f93485eb11ae70aa8113c80972164235",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9389082adeed736774249a995b24c5e0d7d15f28"
        },
        "date": 1695239703264,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25393,
            "range": "±6.34%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25043,
            "range": "±3.39%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 25490,
            "range": "±3.35%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25103,
            "range": "±3.60%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20316,
            "range": "±10.48%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d62bb47102e06e02034a88c07b2f8eeadd4b1ea",
          "message": "client/vm: fix block builder london transition (#3039)\n\n* client/vm: fix block builder london transition\r\n\r\n* handle london gas limit if undefined in buildblock\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: harkamal <gajinder@g11.in>",
          "timestamp": "2023-09-21T12:17:46+05:30",
          "tree_id": "2e16bbf0424bb3d0fa32c8a9b3b7ef91e68ec6f2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9d62bb47102e06e02034a88c07b2f8eeadd4b1ea"
        },
        "date": 1695279078870,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30698,
            "range": "±5.54%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30154,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29901,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25492,
            "range": "±10.33%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422910",
            "value": 29114,
            "range": "±3.16%",
            "unit": "ops/sec",
            "extra": "84 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b1c585ec019a274cf5d118b190372eb788dde87",
          "message": "EVM: BigInt Constants and EXP Optimization (#3034)\n\n* EVM: static reused low-number BigInt values (0,1,2,...), cache often applied exponentiations\r\n\r\n* EVM: fix sha256 precompile inefficiency (precompile seldomly used)\r\n\r\n* EVM: some more bigint constants",
          "timestamp": "2023-09-21T09:38:59-04:00",
          "tree_id": "47eeb6050cb5b626bf4218247090e986d9d492a4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8b1c585ec019a274cf5d118b190372eb788dde87"
        },
        "date": 1695303791906,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25590,
            "range": "±5.68%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 26009,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 25351,
            "range": "±3.42%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25487,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20367,
            "range": "±10.35%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aaa5de64167ec8ddf5f6edab987df3388933175f",
          "message": "util: optimize bytesToBigInt for 1-byte bytes (#3054)\n\n* util: optimize bytesToBigInt for 1-byte bytes\r\n\r\n* bytes: also cache 2-byte bytesToBigInt\r\n\r\n* util: fix byte -> bigint cache",
          "timestamp": "2023-09-21T16:26:17+02:00",
          "tree_id": "15ea581f61c732f65e83db233da03d4951a5b6da",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/aaa5de64167ec8ddf5f6edab987df3388933175f"
        },
        "date": 1695306711995,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25156,
            "range": "±6.28%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25991,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 24832,
            "range": "±3.55%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 24376,
            "range": "±3.56%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23404,
            "range": "±3.72%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6d4b80bff7b1ab3296764688616ff1d5707b6e5",
          "message": "Bigint constants (#3050)\n\n* monorepo: use cached bigints\r\n\r\n* evm: cache all bigint constants\r\n\r\n* util: fix tests\r\n\r\n* Add remaining instances of bigint constants\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-21T17:49:40+02:00",
          "tree_id": "2d89858cf98087496bc61a6c94b487b21185e462",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d6d4b80bff7b1ab3296764688616ff1d5707b6e5"
        },
        "date": 1695311621150,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 24266,
            "range": "±5.05%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 23354,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 23743,
            "range": "±3.16%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 23741,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24020,
            "range": "±3.26%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c373fddd2634bc4d4c3f05acec4175bce66c08ca",
          "message": "common: update the holesky genesis for the relaunch (#3049)\n\n* common: update the holesky genesis for the relaunch\r\n\r\n* blockchain: edit holesky genesis hash\r\n\r\n* blockchain: edit url\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-09-21T22:22:39+02:00",
          "tree_id": "25a5c09db81b324a3fecc78ad94cdb36768ee50d",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c373fddd2634bc4d4c3f05acec4175bce66c08ca"
        },
        "date": 1695328139152,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 31663,
            "range": "±4.89%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30802,
            "range": "±2.44%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30484,
            "range": "±2.60%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28589,
            "range": "±6.21%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 25522,
            "range": "±10.43%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "938cc86cf74bdef95f381964c1345af00e211fa5",
          "message": "ethereum-tests: update to 12.4 (#3052)\n\n* ethereum-tests: update to 12.4\n\n* vm: update cancun test count",
          "timestamp": "2023-09-22T07:09:13-04:00",
          "tree_id": "1d1e17d6059e94f42db6d8c5c8dcd37065ec8c3b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/938cc86cf74bdef95f381964c1345af00e211fa5"
        },
        "date": 1695381166910,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30439,
            "range": "±4.91%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30242,
            "range": "±3.06%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30392,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 29475,
            "range": "±3.26%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24204,
            "range": "±11.12%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d584ae420497e1f1fb2454e44bc1c4ed641b0ea9",
          "message": "evm: remove unnecessary line (#3057)",
          "timestamp": "2023-09-23T22:33:05-04:00",
          "tree_id": "8733709c5c91b5e0dbfcff068196ee374b726c76",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d584ae420497e1f1fb2454e44bc1c4ed641b0ea9"
        },
        "date": 1695522991407,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30659,
            "range": "±6.19%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30579,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30120,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 29745,
            "range": "±3.22%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 25047,
            "range": "±10.54%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d7d8afa29550c262a8921704d002eb98555503f",
          "message": "Simplify code (#3058)",
          "timestamp": "2023-09-24T17:54:56-04:00",
          "tree_id": "2209c2f00ff7ead21b5574ce960f2320fd8b76e2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8d7d8afa29550c262a8921704d002eb98555503f"
        },
        "date": 1695592698636,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30751,
            "range": "±5.19%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30661,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30258,
            "range": "±3.10%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28824,
            "range": "±6.23%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23607,
            "range": "±12.36%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a6adcd80e2a4ff508b340721c0ff84478eb3fae",
          "message": "Clean up CLI arg passing (#3036)\n\n* Use yargs to check for param conflicts\r\n\r\n* Turn on autocomplete\r\n\r\n* Update yargs import type and add unknownparam test\r\n\r\n* Add test for conflicting params\r\n\r\n* Fix various tests\r\n\r\n* Fix network and networkId filtering\r\n\r\n* Clean up readme\r\n\r\n* Add random port assignments for rlpx\r\n\r\n* set timeout to 30s\r\n\r\n* Fix test description\r\n\r\n* remove retry on cli tests\r\n\r\n* Fix test\r\n\r\n* Fix tests\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>",
          "timestamp": "2023-09-25T14:50:52+02:00",
          "tree_id": "c35ec5226d1eab6f5b2673aa7e5831617bbd078c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1a6adcd80e2a4ff508b340721c0ff84478eb3fae"
        },
        "date": 1695646523732,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 21042,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17800,
            "range": "±7.24%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19110,
            "range": "±3.51%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20137,
            "range": "±3.51%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18992,
            "range": "±3.58%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a53772b208072442888b67943623ddeee4243271",
          "message": "Pin a dependency that recently updated (#3060)",
          "timestamp": "2023-09-25T15:31:12+02:00",
          "tree_id": "77088396d3cfa839e0784c4b914fb20c65441ee6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a53772b208072442888b67943623ddeee4243271"
        },
        "date": 1695648954469,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20893,
            "range": "±7.51%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20454,
            "range": "±3.44%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20524,
            "range": "±3.66%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19680,
            "range": "±3.65%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19113,
            "range": "±3.91%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a0a37b7355c77ce841d5b04da55a2a4b53fe550",
          "message": "client: decouple skeleton from beacon sync (#3028)\n\n* client: decouple skeleton from beacon sync\r\n\r\n* get the vi mock in beaconsync spec working\r\n\r\n* fix beacon spec\r\n\r\n* modify snapsync spec to also play beacon sync updates\r\n\r\n* spec fixes\r\n\r\n* fix spec issues\r\n\r\n* remove reduant checks\r\n\r\n* more spec fixes\r\n\r\n* further fixes\r\n\r\n* client fixes\r\n\r\n* Clean up typing in tests\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-25T21:48:06+05:30",
          "tree_id": "900a6ef4e94125e92a717738d5f46c1de5aa9c89",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7a0a37b7355c77ce841d5b04da55a2a4b53fe550"
        },
        "date": 1695658889720,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30352,
            "range": "±5.08%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30001,
            "range": "±2.96%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 29892,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 29470,
            "range": "±3.09%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 24045,
            "range": "±11.85%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35dad1afa28ee5259b79c8f69b423bbfa21acc4e",
          "message": "trie: update mpt tutorial (#3056)\n\n* trie: update first module of examples\r\n\r\n* trie: update module 2 of mpt examples\r\n\r\n* trie: update module 3 of mpt examples\r\n\r\n* trie: simplify imports of mpt examples\r\n\r\n* trie: update module 4 of mpt examples\r\n\r\n* trie: remove redundant comments from code examples\r\n\r\n* Update packages/trie/examples/merkle_patricia_trees/README.md\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\n\r\n* Update packages/trie/examples/merkle_patricia_trees/README.md\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\n\r\n* Update packages/trie/examples/merkle_patricia_trees/README.md\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\n\r\n* Update packages/trie/examples/merkle_patricia_trees/README.md\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>\r\n\r\n* trie: clarify sentence\r\n\r\n---------\r\n\r\nCo-authored-by: Scorbajio <indigophi@protonmail.com>",
          "timestamp": "2023-09-26T10:01:08-07:00",
          "tree_id": "85d0743d5995d1843c2a6e0e412b729e2bec58c4",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/35dad1afa28ee5259b79c8f69b423bbfa21acc4e"
        },
        "date": 1695747923319,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 25496,
            "range": "±6.46%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422906",
            "value": 25594,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 25176,
            "range": "±3.64%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 25050,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20354,
            "range": "±13.08%",
            "unit": "ops/sec",
            "extra": "70 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "243c386f6a2253f90efc26d3b95e65d80749d3fa",
          "message": "Add Option to Return Actual Caught Error Message and Stack Trace when RPC Call Fails (#3059)\n\n* Add stack trace to error response for eth rpc module\r\n\r\n* Add error handling to all rpc handlers for eth module\r\n\r\n* Do not overwrite error code\r\n\r\n* Cover as much of handler code as possible for error handling\r\n\r\n* Add stack trace and error handling to debug rpc module\r\n\r\n* Add stack trace and error handling to web3 rpc module\r\n\r\n* Use config value for rpcDebug for enabling stack traces\r\n\r\n* Create helper for catching errors in rpc handlers\r\n\r\n* Use helper for catching errors in eth module\r\n\r\n* Use helper for catching errors in debug module\r\n\r\n* Use helper for catching errors in web3 module\r\n\r\n* Catch invalid param errors\r\n\r\n* Add type for rpc error\r\n\r\n* Use stack instead of trace\r\n\r\n* Add tests for callWithStackTrace\r\n\r\n* Resolve handler result before returning\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-27T13:41:29-04:00",
          "tree_id": "643e549de9d2c8f84a24aec01cc9b9072eef3f44",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/243c386f6a2253f90efc26d3b95e65d80749d3fa"
        },
        "date": 1695836765415,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20122,
            "range": "±5.42%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 20240,
            "range": "±3.32%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19632,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18917,
            "range": "±3.65%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18425,
            "range": "±4.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c64d565512895a2835bd0e747d77fa2a1f357bf",
          "message": "Docker related updates (#3065)\n\n* Update docker section\r\n\r\n* Remove docker duplicates\r\n\r\n* update docker workflow",
          "timestamp": "2023-09-28T11:30:07+02:00",
          "tree_id": "7e09c19f3bb55348aea65096f93605c13085c7da",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8c64d565512895a2835bd0e747d77fa2a1f357bf"
        },
        "date": 1695893706810,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18649,
            "range": "±6.23%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18775,
            "range": "±3.43%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18556,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18680,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18231,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "606285089bc557db4b0284c07536ae112c4b0bd4",
          "message": "VM: Complement Profiler with out-of-EVM Measurements (#3064)\n\n* VM: first outer profiler output test, generic internal flag for runTx() and runBlock(), move title output to execution start\r\n\r\n* some clean-up, move back to per-option-output\r\n\r\n* EVM -> runTx(): complement profiler with broadly partitioned chunk measurements\r\n\r\n* VM -> runBlock(): complement profiler with broadly partitioned chunk measurements\r\n\r\n* vm: address review\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2023-09-28T12:16:58+02:00",
          "tree_id": "cd39d0e2c9b5975f3fa0efb2ca11d0d59a631fc0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/606285089bc557db4b0284c07536ae112c4b0bd4"
        },
        "date": 1695896434229,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 30420,
            "range": "±5.69%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 30300,
            "range": "±2.99%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 30195,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 28580,
            "range": "±6.03%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23445,
            "range": "±12.34%",
            "unit": "ops/sec",
            "extra": "78 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0aaad282669c59b6d3f5ef006535d580fffa1284",
          "message": "Client: use same Cache Setup for normal and executeBlocks-triggered Execution (#3063)\n\n* Trie: generalize trie shallowCopy() options to allow for more options from the original options to be passed, adopt StateManager usage\r\n\r\n* Trie: add additional cache size default 0 for shallowCopy() test\r\n\r\n* Trie: add adopt cache size on shallowCopy() test\r\n\r\n* StateManager: add downlevelCaches option to shallowCopy(), add tests\r\n\r\n* Add downlevelCaches option in VM shallowCopy(), use option for client when run with --executeBlocks flag\r\n\r\n* replace any usages in StateManager tests to retain typing\r\n\r\n* Apply code review suggestions\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-28T14:14:16+02:00",
          "tree_id": "ac1ce0ebcc7ef4bb04f98df1d1256b64a8b7d0a8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/0aaad282669c59b6d3f5ef006535d580fffa1284"
        },
        "date": 1695903538727,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19503,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17004,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18275,
            "range": "±3.73%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18884,
            "range": "±3.53%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18490,
            "range": "±3.61%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35e6c308798e9e122f46b474173e79a0d67ac584",
          "message": "EIP 4788 updates (address + modulus) (#3068)\n\n* vm: update beacon root address EIP4788\r\n\r\n* common: update 4788 modulus\r\n\r\n* vm: update 4788 bytecode\r\n\r\n* client: update tests",
          "timestamp": "2023-09-28T17:09:57+02:00",
          "tree_id": "9eb5648f9f510981932f024b0edaefcff2785ace",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/35e6c308798e9e122f46b474173e79a0d67ac584"
        },
        "date": 1695914011224,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 28534,
            "range": "±5.27%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422906",
            "value": 27593,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 27389,
            "range": "±3.34%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27001,
            "range": "±3.48%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 23090,
            "range": "±10.91%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f99a295d173d0bfd4bda93146b081d53983241c7",
          "message": "Update dependency to fix high severity vulnerability (#3070)",
          "timestamp": "2023-09-28T15:45:03-04:00",
          "tree_id": "659effe674e38cd84eabf36282a455d589d65a0e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f99a295d173d0bfd4bda93146b081d53983241c7"
        },
        "date": 1695931087904,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 18713,
            "range": "±6.42%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19027,
            "range": "±3.28%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18236,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422908",
            "value": 18267,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18489,
            "range": "±3.60%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001d498ff5131a97ed951cd6246c017e11a749c3",
          "message": "Simplify `client` transports (#3069)\n\n* Remove transports param\r\n\r\n* make servers a server\r\n\r\n* Clean up transports references\r\n\r\n* Clean up sync mode docs\r\n\r\n* Fix logging\r\n\r\n* remove console log\r\n\r\n* fix integration tests",
          "timestamp": "2023-09-29T09:47:47+02:00",
          "tree_id": "943602f471a344b9a828acd51bce61ae295b5350",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/001d498ff5131a97ed951cd6246c017e11a749c3"
        },
        "date": 1695973887532,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 27993,
            "range": "±5.17%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 28365,
            "range": "±3.13%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 28045,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 27617,
            "range": "±3.48%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22555,
            "range": "±10.50%",
            "unit": "ops/sec",
            "extra": "71 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d5ce610e0bd3d92572dcbf9578547385d8f4314",
          "message": "Add debug types to evm (#3072)",
          "timestamp": "2023-09-29T11:33:54+02:00",
          "tree_id": "d8f223412df8f5004688b5872f526390c344b961",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4d5ce610e0bd3d92572dcbf9578547385d8f4314"
        },
        "date": 1695980316737,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 19970,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 18031,
            "range": "±7.43%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422907",
            "value": 19630,
            "range": "±3.38%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19764,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 19210,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "indigophi@protonmail.com",
            "name": "Scorbajio",
            "username": "scorbajio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69d9f25305ddff7d2140f487a07d7037f37e3e90",
          "message": "Implement a more performant code cache (#3022)\n\n* Setup boilerplace code for code cache\r\n\r\n* Fix linting error\r\n\r\n* Export code cache\r\n\r\n* Add tests for code cache\r\n\r\n* Integrate code cache with statemanager\r\n\r\n* Fix code cache integration in state manager\r\n\r\n* Add checkpointing tests for code cache\r\n\r\n* Use address as key for code cache\r\n\r\n* Use bytesToUnprefixedHex\r\n\r\n* Implement put, get, and flush for code cache\r\n\r\n* Flush code cache before other caches in statemanager\r\n\r\n* Update code root of account after putting code\r\n\r\n* Put code into cache even if the code is empty\r\n\r\n* Fix linting issues\r\n\r\n* Fix diffCache state saving\r\n\r\n* Do not throw error on code deletion\r\n\r\n* stateManager: save known prestate\r\n\r\n* Save prestate using current value in db\r\n\r\n* Fix getContractcode\r\n\r\n* Rename variables to be more consistent with naming conventions used in other tests\r\n\r\n* Clarify docs and clean up naming\r\n\r\n* Remove old code cache\r\n\r\n* Simplify _saveCachePreState\r\n\r\n* Fix lint error\r\n\r\n* Add code cache CLI option to client\r\n\r\n* Fix code cache flushing\r\n\r\n* Fix code cache size function\r\n\r\n* Do not call stat function of cache if it is disactivated\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-09-29T12:13:47+02:00",
          "tree_id": "2009d3a2fb136e630e9b15de2a94b12d3a135ff3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/69d9f25305ddff7d2140f487a07d7037f37e3e90"
        },
        "date": 1695982798123,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 22275,
            "range": "±3.20%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422906",
            "value": 19830,
            "range": "±6.27%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422907",
            "value": 20824,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 20616,
            "range": "±3.48%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 20141,
            "range": "±3.66%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gajinder@g11.in",
            "name": "g11tech",
            "username": "g11tech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95d4439b334610dec146ce7b2d0df75093b2a3ef",
          "message": "genesis: fix holesky genesis state (#3074)\n\n* genesis: fix holesky genesis state\r\n\r\n* Make typescript happy\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-09-29T22:27:08+05:30",
          "tree_id": "0791dce52eabbc7ba1fe4457591f736c79d5133c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/95d4439b334610dec146ce7b2d0df75093b2a3ef"
        },
        "date": 1696006882328,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 23252,
            "range": "±6.32%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422906",
            "value": 23836,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 21971,
            "range": "±4.47%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422908",
            "value": 22984,
            "range": "±3.78%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 22271,
            "range": "±3.79%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66335769+ScottyPoi@users.noreply.github.com",
            "name": "Scotty",
            "username": "ScottyPoi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2da533d714918f9513d21f7e9db74c06bd58516",
          "message": "FindPath-optimize (#3066)\n\n* trie/findPath: create stack array with key length\r\n\r\n* trie/findPath: use progress pointer to track key index\r\n\r\n* trie/findPath: filter array before return\r\n\r\n* fix debug msg\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-09-29T15:15:52-06:00",
          "tree_id": "351975c89dca60580eeee0dcf86de9483c1b54e1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e2da533d714918f9513d21f7e9db74c06bd58516"
        },
        "date": 1696022428948,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 20031,
            "range": "±3.18%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422906",
            "value": 17791,
            "range": "±7.20%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422907",
            "value": 18963,
            "range": "±3.76%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422908",
            "value": 19254,
            "range": "±3.67%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 18094,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      }
    ]
  }
}