window.BENCHMARK_DATA = {
  "lastUpdate": 1706040539457,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "karolchojnowski95@gmail.com",
            "name": "Karol Chojnowski",
            "username": "kchojn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a58c6cb1c5f034dfbb2bffd0bb369803b69c5109",
          "message": "Fix Blake2F gas + output calculation on non-zero aligned inputs (#3201)\n\n* refactor(precompiles/09-blake2f.ts): improve readability and performance by using DataView with byteOffset instead of subarray\r\n\r\nThe changes in this commit refactor the code in the `precompile09` function in the `09-blake2f.ts` file. The changes improve the readability and performance of the code by using the `DataView` constructor with `byteOffset` instead of using `subarray` to create new `DataView` instances.\r\n\r\nBefore the changes:\r\n- The `rounds`, `hRaw`, `mRaw`, and `tRaw` variables were created using `subarray` to extract specific parts of the `data` array buffer.\r\n- The `subarray` method was used with specific indices to create new `DataView` instances.\r\n\r\nAfter the changes:\r\n- The `rounds`, `hRaw`, `mRaw`, and `tRaw` variables are created using the `DataView` constructor with `byteOffset` to directly access the desired parts of the `data` array buffer.\r\n- The `DataView` constructor is used with the appropriate `byteOffset` values to create new `DataView` instances.\r\n\r\nThese changes improve the readability of the code by making it clearer which parts of the `data` array buffer are being accessed. Additionally, using `DataView` with `byteOffset` instead of `subarray` can improve performance by avoiding unnecessary memory allocations.\r\n\r\n* evm: add blake2f test\r\n\r\n* evm: blake2f test: add extra comment\r\n\r\n* evm: fix blake2f \"it.only\"\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2023-12-15T21:25:10-05:00",
          "tree_id": "0de4800ed6093cbb01d9b0c75e5a8480ccb4637a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a58c6cb1c5f034dfbb2bffd0bb369803b69c5109"
        },
        "date": 1702693814468,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40060,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39669,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39223,
            "range": "±1.85%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 37705,
            "range": "±3.27%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34709,
            "range": "±5.41%",
            "unit": "ops/sec",
            "extra": "81 samples"
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
          "id": "4f908ca7fb91efc0bc8ec0f6e410f0627aaa0e5a",
          "message": "Add missed `.js file endings (#3205)\n\n* Add missing .js file endings\n\n* More missing endings",
          "timestamp": "2023-12-18T18:44:27-05:00",
          "tree_id": "6f79c42dc4cbbd255a3878fa46156fe32912e7b1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4f908ca7fb91efc0bc8ec0f6e410f0627aaa0e5a"
        },
        "date": 1702944135128,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40977,
            "range": "±3.33%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 40005,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 40050,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 39196,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35182,
            "range": "±6.36%",
            "unit": "ops/sec",
            "extra": "81 samples"
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
          "id": "c5054ebbb478d3a92545b98d67b125f25636c7f1",
          "message": "util: optimize hexToBytes (#3203)\n\n* util: optimize hexToBytes\r\n\r\n* util: also ensure unprefixedHexToBytes (so also toBytes for bigint) uses the optimizer\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-12-19T10:01:54+01:00",
          "tree_id": "9c59c24939235eb4323874ad3567223f4467b8ee",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c5054ebbb478d3a92545b98d67b125f25636c7f1"
        },
        "date": 1702976682163,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 42089,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39520,
            "range": "±3.53%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 40341,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 39330,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 38419,
            "range": "±2.34%",
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
          "id": "a0ef459e26f6a843d67bb2142977b67359109839",
          "message": "evm: ensure modexp right-pads input data\n\n* evm: ensure modexp right-pads input data\n\n* evm: ensure modexp right-pads input data\n\n* evm: fix modexp gas\n\n* Merge branch 'fix-precompiles-inputs' of github.com:ethereumjs/ethereumjs-monorepo into fix-precompiles-inputs\n\n* evm: remove .only test modifier",
          "timestamp": "2023-12-19T09:47:34-05:00",
          "tree_id": "f7a81d36cbfbe22d6fd1aa93cbf73fad93b5d2f0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a0ef459e26f6a843d67bb2142977b67359109839"
        },
        "date": 1702997423251,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41470,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38782,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39595,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 37771,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37478,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
          "id": "9a7d6ac4a5e217de892aa4fc2629201148b44b7f",
          "message": "statemanager: Fix statemanager Browser Example (#3197)\n\n* Use hexToBytes instead of hexStringToBytes\r\n\r\n* Make debug check safe for browsers\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-12-20T10:09:55+01:00",
          "tree_id": "2f7b5b9b83a48d3cd3d9adc56a46492ba3e959a3",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9a7d6ac4a5e217de892aa4fc2629201148b44b7f"
        },
        "date": 1703063567320,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 39951,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39399,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39000,
            "range": "±1.92%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38194,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34702,
            "range": "±5.92%",
            "unit": "ops/sec",
            "extra": "80 samples"
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
          "id": "1b035d020733f6fdc8c0bf6204408838386748c8",
          "message": "Codecov tuning (#3207)\n\n* Add coverage checking and reporting for wallet CI runs\r\n\r\n* Add coverage checking and reporting for genesis CI runs\r\n\r\n* Add coverage run to rlp package workflow\r\n\r\n* Use coverage script for CI coverage report generation\r\n\r\n* Just run node tests for RLP\r\n\r\n* Increase wallet test timeouts\r\n\r\n* Increase wallet test timeout\r\n\r\n* Only run node tests for coverage\r\n\r\n* Comment out tests to see how codecov handles report generation and processing\r\n\r\n* Add arguments for codecov upload action\r\n\r\n* Add arguments for codecov upload action\r\n\r\n* Revert \"Comment out tests to see how codecov handles report generation and processing\"\r\n\r\nThis reverts commit 783dae067e6d6ea43e0295e1dfddd61fb33652a8.\r\n\r\n* Revert \"Add arguments for codecov upload action\"\r\n\r\nThis reverts commit 553bcd5ed89c4c101bc53d4ff0deaa4407f2ae7a.\r\n\r\n* Revert \"Add arguments for codecov upload action\"\r\n\r\nThis reverts commit dff18e5ec968206bf64f5882f1b9be9686da1ea4.\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-12-20T11:28:14+01:00",
          "tree_id": "34c9f04542ff382fae366db3cc24e41de0346627",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/1b035d020733f6fdc8c0bf6204408838386748c8"
        },
        "date": 1703068264568,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41397,
            "range": "±2.32%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38896,
            "range": "±3.57%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39088,
            "range": "±2.38%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 39055,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37530,
            "range": "±2.52%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "timqian@t9t.io",
            "name": "Tim Qian",
            "username": "timqian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76b74d0343f5c595f0107032d1daec61fbc0c72d",
          "message": "Fix broken code path in client readme (#3209)\n\n* Fix broken code path in client readme\r\n\r\n* Fix npm command\r\n\r\n---------\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2023-12-20T15:10:02+01:00",
          "tree_id": "1e4dc2479909192dbb4c58c5350c8afef2a39b0b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/76b74d0343f5c595f0107032d1daec61fbc0c72d"
        },
        "date": 1703081578080,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41471,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39060,
            "range": "±3.89%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39663,
            "range": "±1.86%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38903,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 38119,
            "range": "±2.44%",
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
          "id": "3bd15736d1b470da687cedf78d2de8cccddecf0c",
          "message": "common: schedule cancun for testnets (#3211)",
          "timestamp": "2023-12-29T11:48:10+01:00",
          "tree_id": "0c31c891ba7da24ee233599489e7c06082d3dbf9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3bd15736d1b470da687cedf78d2de8cccddecf0c"
        },
        "date": 1703847188852,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 39570,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 37748,
            "range": "±3.54%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 37745,
            "range": "±2.06%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 37646,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 36061,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "85 samples"
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
          "id": "b5390216d9bc2cea1910db36eee125d509a4aa27",
          "message": "Client: Fetcher Small Bugfixes and Log Improvements (#3024)\n\n* Client -> Execution: less frequent cache stats\r\n\r\n* Client -> Fetcher: log improvements\r\n\r\n* Client -> Fetcher: fix unwanted job execution on skip case, added some no-result guards\r\n\r\n* Client -> Fetcher: more explicit push to Readable stream\r\n\r\n* Client -> Fetcher: add initialization debug msg\r\n\r\n* Client -> Fetcher: tie job skipping to finished jobs instead of processed to avoid to large bulk import chunks\r\n\r\n* Client: a bit less frequent memory stats\r\n\r\n* Client -> Fetcher: fix occasional re-enqueue bug when length of an object is not defined, minor log improvements\r\n\r\n* Lighsync hot fix for fetcher reenqueue logic switches\r\n\r\n* add explicit boolean checks\r\n\r\n---------\r\n\r\nCo-authored-by: Scotty <66335769+ScottyPoi@users.noreply.github.com>\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2023-12-30T10:36:25+01:00",
          "tree_id": "92e622ffb32bfdd45f18c899b9937effd3ef99e7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b5390216d9bc2cea1910db36eee125d509a4aa27"
        },
        "date": 1703929148854,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41753,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39405,
            "range": "±2.75%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39767,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38826,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34928,
            "range": "±6.36%",
            "unit": "ops/sec",
            "extra": "79 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "willcory10@gmail.com",
            "name": "Will Cory",
            "username": "roninjin10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fbe755c816baf1108f72fbec521a100e54444ddd",
          "message": "fix: Fix fetchJsonRpc example (#3213)\n\nExample was previously passing in the full verbose json-rpc request which wasn't necessary",
          "timestamp": "2024-01-03T11:45:13-05:00",
          "tree_id": "e171715b82fa7f28bd9d883298685c94eaf93429",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fbe755c816baf1108f72fbec521a100e54444ddd"
        },
        "date": 1704300481826,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41396,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38441,
            "range": "±3.99%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39375,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38550,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37274,
            "range": "±2.35%",
            "unit": "ops/sec",
            "extra": "84 samples"
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
          "id": "9046347fe9a53632e99ab8dddd4e6edb619c70ce",
          "message": "Dependency Updates (#3212)\n\n* client: Update fs-extra dependencies\r\n\r\n* Remove various obsolete browser devDeps\r\n\r\n* Remove pino\r\n\r\n* Update package-lock again\r\n\r\n* Remove duplicate files\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2024-01-03T19:47:34-07:00",
          "tree_id": "843a945c4a14cee1da2579f3df46ca2272eced9f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/9046347fe9a53632e99ab8dddd4e6edb619c70ce"
        },
        "date": 1704336622213,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40670,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38854,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39080,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38282,
            "range": "±2.19%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34681,
            "range": "±5.56%",
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
          "id": "4ec344b78c1f81cc0becbef3d2de287db6d38fcf",
          "message": "Update callcode test  (#3214)\n\n* Update callcode test with clearer results\r\n\r\n* lint\r\n\r\n* Address feedback\r\n\r\n* evm: squash call(code) test\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2024-01-05T17:31:56-05:00",
          "tree_id": "b1be38cf06746b16d84edc89a0d596ad8fbce45e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4ec344b78c1f81cc0becbef3d2de287db6d38fcf"
        },
        "date": 1704494081959,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40775,
            "range": "±1.93%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38342,
            "range": "±3.50%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39330,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 39018,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37371,
            "range": "±2.28%",
            "unit": "ops/sec",
            "extra": "87 samples"
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
          "id": "3981bcafa5a93720e19768f7cec7791f1c7d201e",
          "message": "Switch from `ts-node` to `tsx` (#3188)\n\n* Switch all ts-node usage to tsx and associated fixes\r\n\r\n* remove `cts` suffix\r\n\r\n* Fix namespace imports\r\n\r\n* Update devp2p lrucache to v10\r\n\r\n* update some non-tsx files to tsx\r\n\r\n* Remove console log\r\n\r\n* log all messages\r\n\r\n* update cli tests to use tsx\r\n\r\n* Address feedback\r\n\r\n* Stick with cts\r\n\r\n* vm: fix retesteth\r\n\r\n* update package-lock\r\n\r\n* update package lock again\r\n\r\n* Add browser deps install script\r\n\r\n* fix browser script\r\n\r\n* Pin browser testing deps\r\n\r\n* Remove browser deps from package-lock\r\n\r\n---------\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>",
          "timestamp": "2024-01-08T13:23:56-05:00",
          "tree_id": "65b2081932c589930752330e4fda6602d775ebcb",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/3981bcafa5a93720e19768f7cec7791f1c7d201e"
        },
        "date": 1704738409876,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41652,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38561,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39346,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38955,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37793,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "85 samples"
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
          "id": "60685302d842cd01a07e31c3f1dc21f41045d34d",
          "message": "Monorepo: Embed Code Examples in README Files\n\n* Add embedme dev dependency to root package.json\n\n* Rebuild package-lock.json\n\n* Add examples:build script to package.json (Block)\n\n* Integrate first exemplary Block example\n\n* Replace typescript marker for markdown code embeds with ts (working alternative + embedme compatible)\n\n* Add missing examples for block\n\n* Add Util package examples, expand README with dedicated module sections and examples\n\n* Flesh out 4844 example",
          "timestamp": "2024-01-10T11:33:22-05:00",
          "tree_id": "5a2b5f052183ce24f003c686021ac9b7c964c751",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/60685302d842cd01a07e31c3f1dc21f41045d34d"
        },
        "date": 1704904566364,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40921,
            "range": "±2.26%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38571,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39184,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38298,
            "range": "±2.15%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34555,
            "range": "±6.04%",
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
          "id": "7bcb197f2a4388b7c48ab6776b31733308ac0933",
          "message": "Internalize `crc` (#3224)\n\n* Internalize crc\r\n\r\n* Add tests\r\n\r\n* Add attribution link",
          "timestamp": "2024-01-10T11:24:29-07:00",
          "tree_id": "ec1b435a9cdb7eb8ddf61ed72826d593aa368e06",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7bcb197f2a4388b7c48ab6776b31733308ac0933"
        },
        "date": 1704911233553,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40527,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38944,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39449,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38323,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34425,
            "range": "±6.55%",
            "unit": "ops/sec",
            "extra": "87 samples"
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
          "id": "417b46659ce452469a2b9688b3fda9b584012ff3",
          "message": "More example rewrites (#3228)\n\n* Add common examples\r\n\r\n* Partial blockchain examples\r\n\r\n* Add simple blockchain example\r\n\r\n* Add remaining blockchain example\r\n\r\n* revert test changes",
          "timestamp": "2024-01-11T23:01:22+01:00",
          "tree_id": "f1baac35ed26a8287164a7dfa3a3b96e47abce1c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/417b46659ce452469a2b9688b3fda9b584012ff3"
        },
        "date": 1705011065458,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40419,
            "range": "±3.33%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39343,
            "range": "±1.87%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39261,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36519,
            "range": "±4.69%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37776,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "84 samples"
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
          "id": "fc0433eccc8a7d6cf327b01a77463ad92743c2af",
          "message": "Use permalink to avoid future breakage of link (#3230)",
          "timestamp": "2024-01-12T11:16:14+01:00",
          "tree_id": "54d05fe86ba5ccc3253f4cfecd2eff9a56a981a7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fc0433eccc8a7d6cf327b01a77463ad92743c2af"
        },
        "date": 1705054738329,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41676,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39476,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39488,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 39140,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 38194,
            "range": "±2.27%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "willcory10@gmail.com",
            "name": "Will Cory",
            "username": "roninjin10"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51fc6dae08b6cec678323c09ed56907d39194e00",
          "message": "chore: Add missing jsdoc to client (#3233)\n\nNoticed this was missing while reading client code",
          "timestamp": "2024-01-15T20:32:23+01:00",
          "tree_id": "5fbb12dc4aefe2382f4a05b2f2936b8afdd0beea",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/51fc6dae08b6cec678323c09ed56907d39194e00"
        },
        "date": 1705347301249,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 39663,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38876,
            "range": "±1.90%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 38968,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 35868,
            "range": "±4.35%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 36971,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "85 samples"
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
          "id": "a8f326aa6023afa9eb968959c8007e5caf10406e",
          "message": "Readable stream analysis refactor (#3231)\n\n* Experiment with importing webstreams\r\n\r\n* Suppress implicit-import eslint error\r\n\r\n* Replace readable-stream with web stream api\r\n\r\n* Remove unnecessary null check\r\n\r\n* Update package-lock and dependencies\r\n\r\n* Fix test\r\n\r\n* Make nonbreaking\r\n\r\n* Use async stream in statemanager\r\n\r\n* Update package-lock file and dependencies\r\n\r\n* Include comment to detail deviation from import policy\r\n\r\n* Revert \"Update package-lock file and dependencies\"\r\n\r\nThis reverts commit baf67f4ada44f7bfd23d1896d7cbb88d033ad657.\r\n\r\n* Revert \"Update package-lock and dependencies\"\r\n\r\nThis reverts commit 02b8845a0e35b8a97efa7b69a6fc26f03e210c38.\r\n\r\n* Update package-lock",
          "timestamp": "2024-01-17T13:22:37+01:00",
          "tree_id": "234296a83446816eee46dd81a936a973be43eac2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a8f326aa6023afa9eb968959c8007e5caf10406e"
        },
        "date": 1705494323877,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41073,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38809,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39502,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38577,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37496,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
          "id": "54446b1baa71f1fba57b69d421daefebb096c6ce",
          "message": "Client/Monorepo: Use WASM Crypto (keccak256) for Hashing / Consistent Hash Function Overwrite (#3192)\n\n* Add @polkadot/wasm crypto dependency\r\n\r\n* Use @polkadot/wasm keccak256 for trie key hashing in execution state manager for VM\r\n\r\n* Tighten calling for useKeyHashingFunction\r\n\r\n* Add customCrypto options dict to Common, first keccak256 usage and test\r\n\r\n* Add custom keccak256 usage to EVM keccak256 opcode\r\n\r\n* Add wasm based ecrecover option\r\n\r\n* export calcSigRecovery\r\n\r\n* use customcrypto if available\r\n\r\n* add test for custom ecrecover\r\n\r\n* Add optional common to trie interface\r\n\r\n* Add cli option\r\n\r\n* Rebuild package-lock.json\r\n\r\n* Add @polkadot/util as a dev dependency to the tx package for testing\r\n\r\n* Rebuild package-lock.json\r\n\r\n* Pass common into trie instantiations in snap sync fetchers\r\n\r\n* Use wasm keccak function if available in bytecodeFetcher\r\n\r\n* Use wasm keccak function if available in trienodeFetcher\r\n\r\n* Refactor default statemanager trie and keccak256 usage to allow option of WASM version\r\n\r\n* Refactor rpc statemanager trie and keccak256 usage to allow option of WASM version\r\n\r\n* Refactor verkle statemanager trie and keccak256 usage to allow option of WASM version\r\n\r\n* Fix reference to statemanager opts\r\n\r\n* Pass common to verifyProof trie instantiation\r\n\r\n* Test if trie shallowCopy is using the correct hashing function\r\n\r\n* Update packages/tx/src/capabilities/legacy.ts\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\n\r\n* Update packages/tx/src/capabilities/legacy.ts\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\n\r\n* Update packages/tx/src/capabilities/legacy.ts\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\n\r\n* Update packages/tx/src/capabilities/legacy.ts\r\n\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\n\r\n* tx: fix double declaration\r\n\r\n* Use wasm keccak function if available in block\r\n\r\n* Use consistent naming for opts parameter\r\n\r\n* Update package-lock\r\n\r\n* Use wasm keccak function if available in header\r\n\r\n* Use consistent naming for opts parameter\r\n\r\n* Explicitly declare return type\r\n\r\n* Pass common to tries instantiated in genTrieRoot functions\r\n\r\n* Fix tests\r\n\r\n* Fix test\r\n\r\n* Block: add suggestions from code review\r\n\r\n* Add test for Block hash() method with custom crypto\r\n\r\n* Some clean-up\r\n\r\n* Pass common in vm and testrunner tries\r\n\r\n* Update evm usage for customCrypto\r\n\r\n* Move wasm crypto tests to client\r\n\r\n* add optional wasm keccak in misc uses\r\n\r\n* Add polkadot/util\r\n\r\n* import util directly\r\n\r\n* resolve polkadot/util to fake dep\r\n\r\n* Devp2p: Use WASM Crypto\r\n\r\n* Devp2p: add keccak function and Common passing structure to RLPx, DPT, DNS\r\n\r\n* Client: pass in common along devp2p DPT instantiation\r\n\r\n* Devp2p: expand to ECIES, first replacement test\r\n\r\n* Devp2p: First full-round replacement (including concatBytes occurrences) for ECIES\r\n\r\n* Devp2p: integrate into DPT server and message\r\n\r\n* Devp2p: Add to DNS ENR\r\n\r\n* Devp2p: remove util keccak256 helper function\r\n\r\n* Mock polkadot util module\r\n\r\n* try installing peers\r\n\r\n* Add custom sha256 support and tests\r\n\r\n* Add wasm ecSign\r\n\r\n* Passing common in various places\r\n\r\n* Fix import\r\n\r\n* block/client: minor changes\r\n\r\n* Add ecrecover function\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>\r\nCo-authored-by: Amir <indigophi@protonmail.com>\r\nCo-authored-by: Jochem Brouwer <jochembrouwer96@gmail.com>\r\nCo-authored-by: Gabriel Rocheleau <contact@rockwaterweb.com>",
          "timestamp": "2024-01-18T04:08:59+01:00",
          "tree_id": "c400f2632457e98c32f689a663a053fda9896742",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/54446b1baa71f1fba57b69d421daefebb096c6ce"
        },
        "date": 1705547660482,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40670,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38385,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 38785,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 37944,
            "range": "±2.11%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34099,
            "range": "±6.67%",
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
          "id": "25d97273f7229ad3098edd5dddf6b142120a7c01",
          "message": "Add ecdsaSign/ecdsaRecover (#3245)",
          "timestamp": "2024-01-19T11:24:19+01:00",
          "tree_id": "c632921bf44416db055162754e52fe636bab34de",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/25d97273f7229ad3098edd5dddf6b142120a7c01"
        },
        "date": 1705660023984,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40834,
            "range": "±2.93%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39949,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39446,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36472,
            "range": "±5.42%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37962,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
          "id": "20b1437160fe199d2716aaeb102ac75fe6f68a49",
          "message": "VM: some more detailed profiler output for VM clean-up steps, explicit execution output to easier grasp EVM profiler vs total run diff (#3241)",
          "timestamp": "2024-01-19T11:48:36+01:00",
          "tree_id": "22668c679341b1653d212dbf7e97ea82fbe30c70",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/20b1437160fe199d2716aaeb102ac75fe6f68a49"
        },
        "date": 1705661622409,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41388,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38462,
            "range": "±4.34%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39499,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38766,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37312,
            "range": "±2.45%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "caymannava@gmail.com",
            "name": "Cayman",
            "username": "wemeetagain"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8525e2821bb32359e7dcf7cb9708ce1b319639f6",
          "message": "perf: improve rlp.decode (#3243)\n\n* chore: add rlp benchmarks\r\n\r\n* perf: improve rlp.decode",
          "timestamp": "2024-01-20T00:10:25+01:00",
          "tree_id": "64c5ad443bf86d4b98bdb77f899ac738623fcd53",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8525e2821bb32359e7dcf7cb9708ce1b319639f6"
        },
        "date": 1705706301813,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40309,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38775,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39471,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36022,
            "range": "±5.38%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422910",
            "value": 36924,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "84 samples"
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
          "id": "865034bd66354c7cff40221386f0e5b881094182",
          "message": "block: validate transactions are signed (#3239)\n\n* block: validate transactions are signed\r\n\r\n* vm: fix tests\r\n\r\n* client: fix tests\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2024-01-19T19:53:09-05:00",
          "tree_id": "91b37917d0586a1e2b81854a85b8346060d92378",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/865034bd66354c7cff40221386f0e5b881094182"
        },
        "date": 1705712937783,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40783,
            "range": "±2.50%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38307,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422907",
            "value": 38793,
            "range": "±2.16%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38498,
            "range": "±2.08%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422910",
            "value": 34041,
            "range": "±7.16%",
            "unit": "ops/sec",
            "extra": "77 samples"
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
          "id": "4b358b431f0fea0721bb18bd37155d86c53011d4",
          "message": "tx: add `addSignature` method (#3238)\n\n* tx: add `addSignature` method\r\n\r\n* Fix typos and remove protected\r\n\r\n---------\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2024-01-20T02:54:33+01:00",
          "tree_id": "ceefc948264661515621b0f141934a4faad104c1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4b358b431f0fea0721bb18bd37155d86c53011d4"
        },
        "date": 1705716354935,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41677,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39020,
            "range": "±2.91%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39583,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 37821,
            "range": "±3.99%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 35454,
            "range": "±5.49%",
            "unit": "ops/sec",
            "extra": "81 samples"
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
          "id": "e1605cf63a1dd6793d8081196ca43ccfd1f24c22",
          "message": "Update more examples (#3242)\n\n* Update tx examples\n\n* Add rlp examples\n\n* Build tx README examples\n\n* Wrap initKzg in try/catch\n\n* update readme\n\n* Update evm examples\n\n* Update genesis examples\n\n* Update examples file extensions\n\n* address feedback\n\n---------\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2024-01-20T14:23:16-05:00",
          "tree_id": "e22c15bd1299a76c424a227706deb04320960795",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e1605cf63a1dd6793d8081196ca43ccfd1f24c22"
        },
        "date": 1705778763691,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40835,
            "range": "±2.44%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38126,
            "range": "±3.70%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39406,
            "range": "±2.13%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38404,
            "range": "±2.09%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37770,
            "range": "±2.25%",
            "unit": "ops/sec",
            "extra": "85 samples"
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
          "id": "dd1da00e54da3d60c74b6dfb574070197e37330e",
          "message": "monorepo: update vite to address vuln (#3249)",
          "timestamp": "2024-01-21T22:09:17-05:00",
          "tree_id": "450906bdc8953c94711be39dcd7eec699caf59e1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/dd1da00e54da3d60c74b6dfb574070197e37330e"
        },
        "date": 1705893270786,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 40150,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39253,
            "range": "±1.83%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 38895,
            "range": "±1.95%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 35899,
            "range": "±4.87%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37092,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
          "id": "4c37cccd7cb42805e49d421a9277072620ced89d",
          "message": "Update vm/wallet examples (#3250)\n\n* add vm examples\r\n\r\n* Update vm examples\r\n\r\n* Update vm examples\r\n\r\n* Update readme\r\n\r\n* update wallet readme ts references\r\n\r\n* Update wallet examples\r\n\r\n* fix example imports\r\n\r\n* Add more complete wallet examples",
          "timestamp": "2024-01-23T08:37:51+01:00",
          "tree_id": "6e2173e3cb9eef148991e06d008d4af1019a5584",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4c37cccd7cb42805e49d421a9277072620ced89d"
        },
        "date": 1705995633606,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41611,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39165,
            "range": "±3.15%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 40176,
            "range": "±1.99%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38606,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37838,
            "range": "±2.49%",
            "unit": "ops/sec",
            "extra": "84 samples"
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
          "id": "2ab3d5a5e0b01b697f5421a0eae7b0ff5e979858",
          "message": "include peers (#3254)",
          "timestamp": "2024-01-23T10:31:45-07:00",
          "tree_id": "f90f78ef568230155768600a3e9c6cf877a56da7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2ab3d5a5e0b01b697f5421a0eae7b0ff5e979858"
        },
        "date": 1706031274513,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 41408,
            "range": "±2.04%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 39178,
            "range": "±3.01%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422907",
            "value": 39701,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 38867,
            "range": "±1.98%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422910",
            "value": 38053,
            "range": "±2.21%",
            "unit": "ops/sec",
            "extra": "86 samples"
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
          "id": "05d253011b120e4ce395c7249f192faf47b4afdf",
          "message": "client: Check for undefined pathStrings\n\n* client: check for undefined filterStringCSV\n\n* client:  trieNodeFetcher:  use empty string if pathString undefined\n\n* client: add test case for added line\n\n* client: add test case for added line\n\n* Merge branch 'master' into checkFilter-bug",
          "timestamp": "2024-01-23T15:06:08-05:00",
          "tree_id": "c79a07c1ad216f1e234edf3d4323e3ec22bf7400",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/05d253011b120e4ce395c7249f192faf47b4afdf"
        },
        "date": 1706040538520,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 39884,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422906",
            "value": 38944,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 38600,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 36221,
            "range": "±4.33%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 37031,
            "range": "±2.36%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      }
    ]
  }
}