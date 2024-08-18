# Changelog

## [1.3.0](https://github.com/Squads-Protocol/squads-mpl/compare/v1.2.0...v1.3.0) (2023-02-13)

### Features

* **programs:** Add close function for program and upgrades ([0674ed8](https://github.com/Squads-Protocol/squads-mpl/commit/0674ed82ba3a5c5171dc5d008b1f8d4905887610))
* **programs:** Remove unused mut tag on accounts ([5fc1995](https://github.com/Squads-Protocol/squads-mpl/commit/5fc1995c5c09ef79fdc2e8a1278cb571ed1bb21f))
* **programs:** Use close macro for more security ([6ae68c6](https://github.com/Squads-Protocol/squads-mpl/commit/6ae68c635ce34f6ee167acab67cff04cd606441f))
* **roles:** added role constraints ([1264d6a](https://github.com/Squads-Protocol/squads-mpl/commit/1264d6a1934d39b3d1b13852747f7fea196ab8b1))
* **roles:** cpi proxy accounts & fn ([59c6379](https://github.com/Squads-Protocol/squads-mpl/commit/59c6379817b3bce89b66a7cc4e03af6f08bb61d7))
* **roles:** initial accounts for roles program ([17954f8](https://github.com/Squads-Protocol/squads-mpl/commit/17954f864a180d82630bfbd194bc6a139d5df84a))
* **sdk:** Update sdk to handle the new meta info at squad create ([f8f5487](https://github.com/Squads-Protocol/squads-mpl/commit/f8f5487f1ad389f9431828b4d87fee820434c9a4))
* **txmeta:** added simple stub for tx metadata tracking ([ffcb27d](https://github.com/Squads-Protocol/squads-mpl/commit/ffcb27da05360f0d183fef32d8028fc69e7f8ff0))
* **validator:** added manager stub ([de7f4fe](https://github.com/Squads-Protocol/squads-mpl/commit/de7f4fe5c205c835408d920bf7d6c4261cb357e7))


### Bug Fixes

* **Anchor.toml.example:** update for txmeta ([d696640](https://github.com/Squads-Protocol/squads-mpl/commit/d696640429de376d69c06e9f3846dfa63305fd38))
* **anchor:** update to 0.26.0 ([a593026](https://github.com/Squads-Protocol/squads-mpl/commit/a593026bcaa594d7961e76297507ffc6932d3d8d))
* **cleanup:** removed deprecated set_executed ([9741fb4](https://github.com/Squads-Protocol/squads-mpl/commit/9741fb40a3b0c6646d564abffd64d4e4c7ce1454))
* **comments:** added details about _meta, etc ([7838dba](https://github.com/Squads-Protocol/squads-mpl/commit/7838dba24e1ff874f030b4a95d313e89efd9f691))
* **comments:** noted potential footguns in execute_ix ([31c6bd7](https://github.com/Squads-Protocol/squads-mpl/commit/31c6bd7eba7ade8671c36469cc97d20f76652b0b))
* **compilation:** Remove warnings of unused & mutability ([92fb21a](https://github.com/Squads-Protocol/squads-mpl/commit/92fb21aa67b05c7a227069025edb0bc75aee5857))
* **constraint:** consistent pattern for member/creator ([2bdc2b9](https://github.com/Squads-Protocol/squads-mpl/commit/2bdc2b945ef7928df1547b559ed7856a0a06dcb5))
* **execute_instruction:** Remove writable checks blocking some functionalities ([9910d70](https://github.com/Squads-Protocol/squads-mpl/commit/9910d70a21621b4ebacba6a06f1e45acfec30de6))
* **execute_instruction:** SQU-681 Prevent execute_instruction for auth 0 ([a2448c5](https://github.com/Squads-Protocol/squads-mpl/commit/a2448c5f830d9ee908e4ba449ad146734036fdf9))
* **execute_transaction:** SQU-682 Prevent execution of internal execute functions ([0947040](https://github.com/Squads-Protocol/squads-mpl/commit/09470403a684b8d4d83928a46dd76d2173de5c21))
* **executed-flag:** remove executed flag in MsIx logic ([6094b1d](https://github.com/Squads-Protocol/squads-mpl/commit/6094b1dc744a64b9c303a412cda0f7f135904ed0))
* **execute:** removed commented code ([f2ba643](https://github.com/Squads-Protocol/squads-mpl/commit/f2ba643daed5f660db02aac548ca6c2022efc507))
* **external-execute:** enforce member execute, no external ([17f5047](https://github.com/Squads-Protocol/squads-mpl/commit/17f50479c22f3a8f1a17d0585375862a2ea71c66))
* **external-execute:** removed constraint from pm, no op ([3143f02](https://github.com/Squads-Protocol/squads-mpl/commit/3143f0244c8c73400c46121eca521b8fa036f174))
* **external-execute:** removed instruction ([0371d93](https://github.com/Squads-Protocol/squads-mpl/commit/0371d936721b14bd0a4a6e42a3104aa9e29e8896))
* **ix-size:** added note about deprecated MAX_SIZE ([0fa2c49](https://github.com/Squads-Protocol/squads-mpl/commit/0fa2c49302c6de00925f2d8ceea2990411f879b7))
* **ix-state:** save the ix state for execute-transaction ([ebd8818](https://github.com/Squads-Protocol/squads-mpl/commit/ebd88183371163eb1697a66566f9c019f31270eb))
* **mesh:** moved mesh to new repo ([c6cb1f2](https://github.com/Squads-Protocol/squads-mpl/commit/c6cb1f2e93b66be7d5413158188e82c6ed825c91))
* **meta:** added string on create ([0b5ddd0](https://github.com/Squads-Protocol/squads-mpl/commit/0b5ddd04e04cfac97610cbbf9492487348914dcc))
* **ms-auth:** payer swap index change ([e0d6369](https://github.com/Squads-Protocol/squads-mpl/commit/e0d6369b567d4828d19e10c37c2910ba102f7c7e))
* **ms-settings:** removed duplicate ms account ([ff11b26](https://github.com/Squads-Protocol/squads-mpl/commit/ff11b26d09890fc45e4ad2cfdd6abaad5328959c))
* **organize:** added more documentation, reorg files ([61087aa](https://github.com/Squads-Protocol/squads-mpl/commit/61087aa6a305fb62d8a7b6e834f6b5ae105d9bed))
* **program-id:** added pId ([a78299d](https://github.com/Squads-Protocol/squads-mpl/commit/a78299dde19e06783a0786bc79460fa4adaae5ca))
* **realloc:** removed payer-swap from realloc ([fb7356f](https://github.com/Squads-Protocol/squads-mpl/commit/fb7356f782edb9a99087088316d838ca8696178f))
* **roles:** added program ids to Anchor.example ([8430b01](https://github.com/Squads-Protocol/squads-mpl/commit/8430b01dd0fc712605ea849986b0a1ba34ae280e))
* **roles:** added some comments ([aca31d3](https://github.com/Squads-Protocol/squads-mpl/commit/aca31d320a175f5a2a0ffaa51a26e101f2e2f0d9))
* **roles:** change to delegate, rent update ([e31d405](https://github.com/Squads-Protocol/squads-mpl/commit/e31d405c26ff2cd753ff45f41c0b476b89feb3c1))
* **roles:** enforce tx authority ([3ef6f4a](https://github.com/Squads-Protocol/squads-mpl/commit/3ef6f4ad262985c8b175f18e2f1e4632b71fce5c))
* **roles:** more updates and added to test runner ([4adc43b](https://github.com/Squads-Protocol/squads-mpl/commit/4adc43bbeacff1e59569d2515ac1154ba2c76d58))
* **roles:** moved readme ([67b7cd7](https://github.com/Squads-Protocol/squads-mpl/commit/67b7cd74a0fa4bf00f647772184efc8f5f341486))
* **roles:** tests updated, delegate for executetxproxy ([d98ff39](https://github.com/Squads-Protocol/squads-mpl/commit/d98ff39bbe437b35efbc8b49f99d755081f1e4e0))
* **roles:** updated logic and test ([8265257](https://github.com/Squads-Protocol/squads-mpl/commit/8265257d9e77f532bb890123687731bbe408344e))
* **roles:** updated test ([8deeb5b](https://github.com/Squads-Protocol/squads-mpl/commit/8deeb5bc74b74f7992462537650ff13507629ea4))
* **roles:** updates ([dfbac0f](https://github.com/Squads-Protocol/squads-mpl/commit/dfbac0fe5f103cbbbc587407ae1036a37405d0db))
* **sdk:** Fix sdk createSquad metadata wrong params ([7ef3ed2](https://github.com/Squads-Protocol/squads-mpl/commit/7ef3ed2bab2f68fb49d5db327854b2fccc092bb0))
* **security-txt:** hash and auditors ([829b79a](https://github.com/Squads-Protocol/squads-mpl/commit/829b79ac1ad2965de5c225732a4bd91d0f324417))
* **security:** added security.txt macro ([701d929](https://github.com/Squads-Protocol/squads-mpl/commit/701d929ff5f7c260b047d383eef83e4c93b0f2ba))
* **tests:** updates to test suite and helpers ([ffdbbe5](https://github.com/Squads-Protocol/squads-mpl/commit/ffdbbe5728cb955eee3c1ccf1be97360c5d5a2e9))
* **txmeta:** output accounts ([1e277f6](https://github.com/Squads-Protocol/squads-mpl/commit/1e277f68ac6ef92f3bc671baaa21a57d4a239bac))
* **validator:** cleanup unused ([aa189e1](https://github.com/Squads-Protocol/squads-mpl/commit/aa189e167d5b0a0b2805271874677ddf64b48c33))
* **validator:** idl and new id ([d6fafd5](https://github.com/Squads-Protocol/squads-mpl/commit/d6fafd5916e425171e25c0887f67318fd455dc0f))

## [1.2.0](https://github.com/Squads-Protocol/squads-mpl/compare/v1.1.1...v1.2.0) (2022-09-28)


### Features

* **mesh:** added WIP for mesh program ([a4ddaae](https://github.com/Squads-Protocol/squads-mpl/commit/a4ddaae260955837e6555c8123c320de4eb358a3))


### Bug Fixes

* **authority:** check that type is Default or Custom ([6568df3](https://github.com/Squads-Protocol/squads-mpl/commit/6568df39c9c5ecf11ae477c3a96797c6f0b65c97))
* **mesh:** 2 signers for execute ([cccc84f](https://github.com/Squads-Protocol/squads-mpl/commit/cccc84fbcf8f887d143be14d7077e4e0f28a23d0))
* **sdk:** package updates and commitment change ([b571171](https://github.com/Squads-Protocol/squads-mpl/commit/b571171aa57f94169f20ced7f0d909ca0d781476))

## [1.1.1](https://github.com/Squads-Protocol/squads-mpl/compare/v1.1.0...v1.1.1) (2022-08-24)


### Bug Fixes

* **sdk:** update sdk dependency ver ([a31b09b](https://github.com/Squads-Protocol/squads-mpl/commit/a31b09b2e9ad2f254ad02c9b3de6f295d40685f0))

## [1.1.0](https://github.com/Squads-Protocol/squads-mpl/compare/v1.0.7...v1.1.0) (2022-08-18)


### Features

* **add_member_with_threshold:** added discriminator ([716f249](https://github.com/Squads-Protocol/squads-mpl/commit/716f2496566e3170be6e70dda62a6b9a1a6d5764))


### Bug Fixes

* **tests:** added test for add/change combo ([4ed4717](https://github.com/Squads-Protocol/squads-mpl/commit/4ed47176344ec65a7854ad43046e7a6922baf3cf))
* **tests:** remove duplicate ([28d9dbd](https://github.com/Squads-Protocol/squads-mpl/commit/28d9dbd5c1a767e6e2def36f4309c86ddd654533))

## [1.0.7](https://github.com/Squads-Protocol/squads-mpl/compare/v1.0.6...v1.0.7) (2022-08-10)


### Bug Fixes

* **members:** moved auto approve off chain - member account check ([8671704](https://github.com/Squads-Protocol/squads-mpl/commit/8671704b0a9a434a8b135abfb8b047279453ba19))

## [1.0.6](https://github.com/squads-dapp/squads-mpl/compare/v1.0.5...v1.0.6) (2022-08-05)


### Bug Fixes

* **package:** update package.json ([13f2f0c](https://github.com/squads-dapp/squads-mpl/commit/13f2f0c50b045dde4b56902e98ee5c34285cde72))
* **upgrades:** single execute ix for upgrade update ([4e9a0d2](https://github.com/squads-dapp/squads-mpl/commit/4e9a0d2cb32b9d541ea5a7cbd4bfdcab512b894c))

## [1.0.5](https://github.com/squads-dapp/squads-mpl/compare/v1.0.4...v1.0.5) (2022-08-04)


### Bug Fixes

* **add-member-realloc:** clean up accountmeta and accountinfo ([b15eed3](https://github.com/squads-dapp/squads-mpl/commit/b15eed3002e401a972f7f717d55b62661d8e46e0))

## [1.0.4](https://github.com/squads-dapp/squads-mpl/compare/v1.0.3...v1.0.4) (2022-08-03)


### Bug Fixes

* **execute:** range check fix ([a567366](https://github.com/squads-dapp/squads-mpl/commit/a567366cf85d774c9c5b2f6ea17836e4ae18ca6c))
* **ids:** updated the program addresses ([c96dab5](https://github.com/squads-dapp/squads-mpl/commit/c96dab5f97e4ead188c76431217babee760c8cd4))

## [1.0.3](https://github.com/squads-dapp/squads-mpl/compare/v1.0.2...v1.0.3) (2022-08-03)


### Bug Fixes

* **execution:** Update execution process for add_member ([f0165c1](https://github.com/squads-dapp/squads-mpl/commit/f0165c17a8fbf6e5cbe60f72fd55f6d17565ed5a))
* **update:** added constraint for previously executed upgrades ([79b6e9e](https://github.com/squads-dapp/squads-mpl/commit/79b6e9e6f78f12f14d782da864c8ab6d5c043405))
* **update:** context constraints updated ([98c5ab4](https://github.com/squads-dapp/squads-mpl/commit/98c5ab435ac94535b9b38b95b95f2a7aae427a38))

## [1.0.2](https://github.com/squads-dapp/squads-mpl/compare/v1.0.1...v1.0.2) (2022-07-29)


### Bug Fixes

* **cleanup:** new test and code cleanup ([d083556](https://github.com/squads-dapp/squads-mpl/commit/d083556f00db619a013398137bbcedd3fd27e88e))

## [1.0.1](https://github.com/squads-dapp/squads-mpl/compare/v1.0.0...v1.0.1) (2022-07-25)


### Bug Fixes

* **attach_ix:** OS-SQD-SUG-01 - verify internal attached ix has proper program_id ([aa62d18](https://github.com/squads-dapp/squads-mpl/commit/aa62d18d88cf276f2b4c47101e5fe12cb6e5ef47))

## 1.0.0 (2022-07-22)


### Bug Fixes

* **allocation:** OS-SQD-SUG-00 ([2220864](https://github.com/squads-dapp/squads-mpl/commit/222086430363e07651b8efc0a03adaea5a624b5b))
* **authority:** OS-SQD-SUG-01 ([d200f3d](https://github.com/squads-dapp/squads-mpl/commit/d200f3ddf2bd888b4d4dfdecf8354a7ba0e1e514))
* **optimization:** OS-SQD-SUG-02 ([850858c](https://github.com/squads-dapp/squads-mpl/commit/850858ce71c3ead59af5d567577642e791238330))
* **optimize:** OS-SQD-SUG-02 ([91ce590](https://github.com/squads-dapp/squads-mpl/commit/91ce5904815356e6f523dd7eabefcdc1300474e5))
* **optimize:** OS-SQD-SUG-03 ([e7108e1](https://github.com/squads-dapp/squads-mpl/commit/e7108e1211fa98f306f8e147204b84971994e499))
