# Squads Multisig Program Library
The program facilitates signing and executing transactions on behalf of a multisig. The program is written in [Anchor](https://github.com/coral-xyz/anchor), with instructions and accounts that can be easily deserialized by the program IDL. If you wish to invoke the program via a CPI, you'll need the Anchor discriminator (8 Bytes Hex) prepended to the instruction arguments, followed by the serialized data required.

## Contents
* [Get Started](#get-started)
* [Accounts & Instructions](#accounts-and-instructions)
  * [Accounts](#accounts)
  * [Instructions](#instructions)
  * [Internal Instructions](#internal-instructions)
  * [Authorities](#authorities)
* [Create a Multisig](#create-a-multisig)
* [Create a MsTransaction](#create-a-mstransaction)
  * [Initializing a MsTransaction](#initializing-a-mstransaction)
  * [Attaching MsInstructions to a MsTransaction](#attaching-msinstructions-to-a-mstransaction)
  * [Activating a MsTransaction](#activating-a-mstransaction)
* [Approve or Reject a MsTransaction](#approve-or-reject-a-mstransaction)
* [Execute a MsTransaction](#execute-a-mstransaction)
* [Verifying](#verifying)
* [Contributing](#contributing)
* [Other Tools and Programs](#other-tools-and-programs)

## Get started
`anchor test --skip-deploy` will run through the basic functionality of the multisig. You may need to adjust the declared program id.

## Accounts and Instructions
### Accounts
There are 3 types of accounts in the program
* Multisig ([Ms](https://github.com/squads-dapp/squads-mpl/blob/main/programs/squads-mpl/src/state/ms.rs#L6]))
* Transaction ([MsTransaction](https://github.com/squads-dapp/squads-mpl/blob/main/programs/squads-mpl/src/state/ms.rs#L94))
* Instruction ([MsInstruction](https://github.com/squads-dapp/squads-mpl/blob/main/programs/squads-mpl/src/state/ms.rs#L235))

### Instructions
Instructions can be categorized as such:
* Internal Instructions, which are the squads-mpl instructions invoked directly
* External/Arbitrary Instructions, which can be attached to transactions that will ultimately be executed by the multisig

### Internal Instructions
Internal instructions that primarily affect the Ms account:
* Create
* Add Member
* Remove Member
* Change Threshold
* Add Member & Change Threshold
* Remove Member & Change Threshold

Internal instructions related to handling MsTransactions:
* Create
* Attach External/Abitrary Instruction
* Sign off / Activate
* Approve
* Reject
* Cancel
* Execute

### Authorities
Each created and executed MsTransaction does so on behalf of an authority. Authorities are derived by a u32, and saved in the MsTransaction account when created (by passing in the `authority_index` argument). The Authority with an index of 0 is reserved for MsTransactions that affect the multisig directly (add member, change threshold, etc). Other authority indexes are agnostic and represent the underlying account/PDA that will be signed for during execution. For example, a multisig can use `authority_index 1` for a vault, `authority_index 2` for a secondary vault, and `authority_index 3` for a program upgrade authority. It is up to the end user to decide how to leverage these and to make sure that the `authority_index` in the created MsTransaction matches the necessary accounts specified in the attached instructions.

There is an additional instruction if the multisig wishes to increment the authority_index saved in the Ms account, to make it easier to derive authority PDAs for a user interface. the authority_index in the Ms account is optionally used as a way to derive authorities that may have been used, but it has no affect on how the multisig operates - it's strictly for convenience. 

## Create a Multisig
To create a multisig with the Squads MPL, invoke the `create` [instruction](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/squads-mpl/src/lib.rs#L22). Specify the threshold of the multisig, a preferably random key to seed the multisig address, and the keys that will be required to sign off on any transactions.

## Create a MsTransaction
### Initializing a MsTransaction
To create a transaction for the multisig, invoke the `create_transaction` [instruction](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/squads-mpl/src/lib.rs#L184) and specify the authority index as the argument. Note that transactions, while able to contain multiple instructions, will only be able to utilize a single authority. After the MsInstruction account is created it will be in a `Draft` status. More information about [authorities here](#authorities).

### Attaching MsInstructions to a MsTransaction
When MsTransactions are in the `Draft` status, the member that created the MsTransaction is free to attach MsInstructions. Use the `add_instruction` [instruction](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/squads-mpl/src/lib.rs#L222) and pass in the instruction you wish to attach to the MsTransaction as a serialized Solana TransactionInstruction for the argument. Attached instructions will then be saved in the corresponding MsInstruction account with the relevant PDA acting as the address, trackable via the instruction_index of both the [MsTransaction](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/squads-mpl/src/state/ms.rs#L104) and relevant [MsInstruction](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/squads-mpl/src/state/ms.rs#L236) accounts. Note that even though an executor can request more compute cycles there is still a data limit for the execution, so we recommend keeping the total unique accounts required by all attached instructions under 30 accounts, otherwise the MsTransaction will need to be executed sequentially.

### Activating a MsTransaction
After you've attached the desired MsInstructions, the creator of the MsTransaction can activate the MsTransaction so that the multisig may vote to approve or reject it. Use the `activate_transaction` [instruction](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/squads-mpl/src/lib.rs#L214) to switch the status of the MsTransaction from `Draft` to `Active`.

## Approve or Reject a MsTransaction
MsTransactions that have a `Active` status can be voted to be approved or rejected. To approve a transaction for execution, use the `approve_transaction` [instruction](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/squads-mpl/src/lib.rs#L238). Similarly, to reject a MsTransaction, use the `reject_transaction` [instruction](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/squads-mpl/src/lib.rs#L254).

## Execute a MsTransaction
In order to execute a MsTransaction, in addition to the accounts specified in the IDL, the user/key invoking the execute must also pass in a list of accounts that reference the MsInstructions in this format (example for 2 instructions):

First MsInstruction (`instruction_index of 1`)
* The PDA of the MsInstruction
* The program_id that will be invoked by the MsInstruction
* A list of all other accounts referenced by the attached MsInstruction
  
Second MsInstruction (`instruction_index of 2`)
* The PDA of the MsInstruction
* The program_id that will be invoked by the MsInstruction
* A list of all other accounts referenced by the attached MsInstruction

The accounts needed for execution can be derived by the MsTransaction account itself, as the MsTransaction account contains an instruction_index, which when attaching an MsInstruction needs to be incremented sequentially. To execute, first you can fetch the MsTransaction account, and then derive all MsInstruction accounts by working backwards from the instruction_index in the MsTransaction and derive the MsInstruction PDAs, fetch the MsInstruction accounts, and then format the ExecuteInstruction for the multisig as explained above. See how this can be accomplished you can [take a look here at one of the test helper functions](https://github.com/squads-dapp/squads-mpl/blob/main/helpers/transactions.ts#L29). The accounts sent to the ExecuteTransaction instruction should follow a unique array index pattern, where the array has a total number of items that map to the list of expected accounts, with each item representing the index of the account to use from the `remaining_accounts` field in the Context.

## Verifying
You can verify the build and on-chain program from commit `c95b7673d616c377a349ca424261872dfcf8b19d` by using the command:
```anchor verify -p squads_mpl SMPLecH534NA9acpos4G6x7uf3LWbCAwZQE9e8ZekMu -d projectserum/build:v0.26.0 --provider.cluster {specify-cluster-here}```
Note: currently due to a quirk, be sure to `avm use 0.24.0` otherwise the IDL won't be verified, only the program itself.

## Contributing
The community is encouraged to contribute to the Squads-MPL, either by proposing fixes, updates, or adding more programs. 
For general proposed fixes and features, please submit a pull request for review. 

## Other Tools and Programs
* [Program Manager](https://github.com/squads-dapp/squads-mpl/tree/main/programs/program-manager) - a program to manage program upgrades for Squads multisigs
* [Squads Grinder](https://github.com/mralbertchen/squads-grinder) -Vanity authority key grinder if you want to try to grind a vault/authority address
