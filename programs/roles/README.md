## Squads Roles program
### Overview
The Squads Roles Program enables a multisig to delegate certain restricted actions to a member key. For example, a multisig can specify a 
specific member key to only propose or initiate transactions, along with a number of other granular controls.
### Roles
The Roles Program allows certain member keys to be derived that can only perform the following actions:
1. Initiate
2. Vote
3. Execute
4. Initiate & Execute
5. Initiate & Vote
   
### Invoking the Program
The Roles Program acts as a proxy on behalf of an origin key and the Squads Program - invocations first pass through the Roles Program to determine if they should be passed on to the Squads Multisig Program. If the assigned roles do not match what the origin key is trying to invoke, the action will be rejected. The origin key is the base key which the roles and delegate keys are derived from. In the following example, we will use an origin key that is a users wallet.\
Use Case:
1. We want to create a role for this user's wallet.
2. The user should only be allowed to initiate/propose transactions.
3. The user should not be allowed to vote or execute.

To accomplish this, there are 2 PDA derivations based off this origin key: the User Role account PDA and the Delegate PDA.\
The User Role account simply holds the origin key and the role in which to enforce restrictions. The Delegate is a PDA that is added to the multisig (appears as a normal owner/member), and acts as proxy for Signing and funding any invocations that occur from the origin key.

The User Role PDA is derived from the origin key & the Multisig PDA, and the Delegate PDA is derived from the User Role PDA and the Multisig PDA.\
The User Roles PDA (for the account)\
`["squad", multisig_pda, role_index, "user-role"]`\
The Delegate PDA (which is added as a member of the Squads multisig)\
`["squad", user_role_pda, user_key, "delegate"]`

User Role accounts can only be added and created by pre-existing Multisig Member Keys. Invoking the Roles Program requires the origin key, the user role key, and the delegate key.

