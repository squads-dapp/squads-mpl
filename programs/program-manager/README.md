## Program Manager
* [Overview](#overview)
* [Accounts](#accounts)
* [Instructions](#instructions)

### Overview
The Program Manager is a simple program used to save upgrade instructions for a program managed by a Squads MPL Authority. Members of a Squad multisig can keep track of programs and upgrade buffers by invoking the various instructions provided by the program. Note, the Program Manager simply stores data about programs and their upgrades, it does not invoke any upgrade instructions on its own, but merely provides convenience for storing information about Programs that wish to be managed by a Squad multisig.

### Accounts
The Program Manager has 3 types of accounts: ProgramManager, ManagedProgram, and ProgramUpgrade. In order to use the Program Manager, a member of a Squads multisig should first create a ProgramManager account derived from the Squad PDA. The ProgramManager account will keep track of Programs with the `managed_program_index`, which is used to derive the MangedProgram account address. ManagedProgram accounts simply track the address of a program being managed by the Squad, along with an upgrade_index to further track corresponding upgrade instructions. ProgramUpgrade accounts store data about a specific upgrade along with the actual upgrade instruction itself.

### Instructions
* [Create Program Manager](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/program-manager/src/lib.rs#L15)
* [Create Managed Program](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/program-manager/src/lib.rs#L23)
* [Create Program Upgrade](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/program-manager/src/lib.rs#L38)
* [Set as executed](https://github.com/Squads-Protocol/squads-mpl/blob/main/programs/program-manager/src/lib.rs#L76)
