export type SquadsMpl = {
  "version": "1.3.0",
  "name": "squads_mpl",
  "instructions": [
    {
      "name": "create",
      "docs": [
        "Creates a new multisig account"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "threshold",
          "type": "u16"
        },
        {
          "name": "createKey",
          "type": "publicKey"
        },
        {
          "name": "members",
          "type": {
            "vec": "publicKey"
          }
        },
        {
          "name": "meta",
          "type": "string"
        }
      ]
    },
    {
      "name": "addMember",
      "docs": [
        "The instruction to add a new member to the multisig.",
        "Adds member/key to the multisig and reallocates space if necessary",
        "If the multisig needs to be reallocated, it must be prefunded with",
        "enough lamports to cover the new size."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newMember",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeMember",
      "docs": [
        "The instruction to remove a member from the multisig"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "oldMember",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeMemberAndChangeThreshold",
      "docs": [
        "The instruction to change the threshold of the multisig and simultaneously remove a member"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "oldMember",
          "type": "publicKey"
        },
        {
          "name": "newThreshold",
          "type": "u16"
        }
      ]
    },
    {
      "name": "addMemberAndChangeThreshold",
      "docs": [
        "The instruction to change the threshold of the multisig and simultaneously add a member"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newMember",
          "type": "publicKey"
        },
        {
          "name": "newThreshold",
          "type": "u16"
        }
      ]
    },
    {
      "name": "changeThreshold",
      "docs": [
        "The instruction to change the threshold of the multisig"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newThreshold",
          "type": "u16"
        }
      ]
    },
    {
      "name": "addAuthority",
      "docs": [
        "instruction to increase the authority value tracked in the multisig",
        "This is optional, as authorities are simply PDAs, however it may be helpful",
        "to keep track of commonly used authorities in a UI.",
        "This has no functional impact on the multisig or its functionality, but",
        "can be used to track commonly used authorities (ie, vault 1, vault 2, etc.)"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "createTransaction",
      "docs": [
        "Instruction to create a multisig transaction.",
        "Each transaction is tied to a single authority, and must be specified when",
        "creating the instruction below. authority 0 is reserved for internal",
        "instructions, whereas authorities 1 or greater refer to a vault,",
        "upgrade authority, or other."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authorityIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "activateTransaction",
      "docs": [
        "Instruction to set the state of a transaction \"active\".",
        "\"active\" transactions can then be signed off by multisig members"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "addInstruction",
      "docs": [
        "Instruction to attach an instruction to a transaction.",
        "Transactions must be in the \"draft\" status, and any",
        "signer (aside from execution payer) specified in an instruction",
        "must match the authority PDA specified during the transaction creation."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instruction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "incomingInstruction",
          "type": {
            "defined": "IncomingInstruction"
          }
        }
      ]
    },
    {
      "name": "approveTransaction",
      "docs": [
        "Instruction to approve a transaction on behalf of a member.",
        "The transaction must have an \"active\" status"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "rejectTransaction",
      "docs": [
        "Instruction to reject a transaction.",
        "The transaction must have an \"active\" status."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "cancelTransaction",
      "docs": [
        "Instruction to cancel a transaction.",
        "Transactions must be in the \"executeReady\" status.",
        "Transaction will only be cancelled if the number of",
        "cancellations reaches the threshold. A cancelled",
        "transaction will no longer be able to be executed."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "executeTransaction",
      "docs": [
        "Instruction to execute a transaction.",
        "Transaction status must be \"executeReady\", and the account list must match",
        "the unique indexed accounts in the following manner:",
        "[ix_1_account, ix_1_program_account, ix_1_remaining_account_1, ix_1_remaining_account_2, ...]",
        "",
        "Refer to the README for more information on how to construct the account list."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "accountList",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "executeInstruction",
      "docs": [
        "Instruction to sequentially execute attached instructions.",
        "Instructions executed in this matter must be executed in order,",
        "this may be helpful for processing large batch transfers.",
        "This instruction can only be used for transactions with an authority",
        "index of 1 or greater.",
        "",
        "NOTE - do not use this instruction if there is not total clarity around",
        "potential side effects, as this instruction implies that the approved",
        "transaction will be executed partially, and potentially spread out over",
        "a period of time. This could introduce problems with state and failed",
        "transactions. For example: a program invoked in one of these instructions",
        "may be upgraded between executions and potentially leave one of the",
        "necessary accounts in an invalid state."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instruction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "ms",
      "docs": [
        "Ms is the basic state account for a multisig."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "threshold",
            "type": "u16"
          },
          {
            "name": "authorityIndex",
            "type": "u16"
          },
          {
            "name": "transactionIndex",
            "type": "u32"
          },
          {
            "name": "msChangeIndex",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "createKey",
            "type": "publicKey"
          },
          {
            "name": "allowExternalExecute",
            "type": "bool"
          },
          {
            "name": "keys",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "msTransaction",
      "docs": [
        "The MsTransaction is the state account for a multisig transaction"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "ms",
            "type": "publicKey"
          },
          {
            "name": "transactionIndex",
            "type": "u32"
          },
          {
            "name": "authorityIndex",
            "type": "u32"
          },
          {
            "name": "authorityBump",
            "type": "u8"
          },
          {
            "name": "status",
            "type": {
              "defined": "MsTransactionStatus"
            }
          },
          {
            "name": "instructionIndex",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "approved",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "rejected",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "cancelled",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "executedIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "msInstruction",
      "docs": [
        "The state account for an instruction that is attached to a transaction.",
        "Almost analogous to the native Instruction struct for solana, but with an extra",
        "field for the bump."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "keys",
            "type": {
              "vec": {
                "defined": "MsAccountMeta"
              }
            }
          },
          {
            "name": "data",
            "type": "bytes"
          },
          {
            "name": "instructionIndex",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "executed",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "MsAccountMeta",
      "docs": [
        "Wrapper for our internal MsInstruction key serialization schema",
        "MsAccount meta is identical to the AccountMeta struct, but defined",
        "here for serialization purposes."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "isSigner",
            "type": "bool"
          },
          {
            "name": "isWritable",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "IncomingInstruction",
      "docs": [
        "Incoming instruction schema, used as an argument in the attach_instruction.",
        "Identical to the solana struct for Instruction, but uses the MsAccountMeta.",
        "Provided for de/serialization purposes."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "keys",
            "type": {
              "vec": {
                "defined": "MsAccountMeta"
              }
            }
          },
          {
            "name": "data",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "MsTransactionStatus",
      "docs": [
        "MsTransactionStatus enum of the current status of the Multisig Transaction."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Draft"
          },
          {
            "name": "Active"
          },
          {
            "name": "ExecuteReady"
          },
          {
            "name": "Executed"
          },
          {
            "name": "Rejected"
          },
          {
            "name": "Cancelled"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "KeyNotInMultisig"
    },
    {
      "code": 6001,
      "name": "InvalidTransactionState"
    },
    {
      "code": 6002,
      "name": "InvalidNumberOfAccounts"
    },
    {
      "code": 6003,
      "name": "InvalidInstructionAccount"
    },
    {
      "code": 6004,
      "name": "InvalidAuthorityIndex"
    },
    {
      "code": 6005,
      "name": "TransactionAlreadyExecuted"
    },
    {
      "code": 6006,
      "name": "CannotRemoveSoloMember"
    },
    {
      "code": 6007,
      "name": "InvalidThreshold"
    },
    {
      "code": 6008,
      "name": "DeprecatedTransaction"
    },
    {
      "code": 6009,
      "name": "InstructionFailed"
    },
    {
      "code": 6010,
      "name": "MaxMembersReached"
    },
    {
      "code": 6011,
      "name": "EmptyMembers"
    },
    {
      "code": 6012,
      "name": "PartialExecution"
    },
    {
      "code": 6013,
      "name": "NotEnoughLamports"
    }
  ]
};

export const IDL: SquadsMpl = {
  "version": "1.3.0",
  "name": "squads_mpl",
  "instructions": [
    {
      "name": "create",
      "docs": [
        "Creates a new multisig account"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "threshold",
          "type": "u16"
        },
        {
          "name": "createKey",
          "type": "publicKey"
        },
        {
          "name": "members",
          "type": {
            "vec": "publicKey"
          }
        },
        {
          "name": "meta",
          "type": "string"
        }
      ]
    },
    {
      "name": "addMember",
      "docs": [
        "The instruction to add a new member to the multisig.",
        "Adds member/key to the multisig and reallocates space if necessary",
        "If the multisig needs to be reallocated, it must be prefunded with",
        "enough lamports to cover the new size."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newMember",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeMember",
      "docs": [
        "The instruction to remove a member from the multisig"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "oldMember",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeMemberAndChangeThreshold",
      "docs": [
        "The instruction to change the threshold of the multisig and simultaneously remove a member"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "oldMember",
          "type": "publicKey"
        },
        {
          "name": "newThreshold",
          "type": "u16"
        }
      ]
    },
    {
      "name": "addMemberAndChangeThreshold",
      "docs": [
        "The instruction to change the threshold of the multisig and simultaneously add a member"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "newMember",
          "type": "publicKey"
        },
        {
          "name": "newThreshold",
          "type": "u16"
        }
      ]
    },
    {
      "name": "changeThreshold",
      "docs": [
        "The instruction to change the threshold of the multisig"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newThreshold",
          "type": "u16"
        }
      ]
    },
    {
      "name": "addAuthority",
      "docs": [
        "instruction to increase the authority value tracked in the multisig",
        "This is optional, as authorities are simply PDAs, however it may be helpful",
        "to keep track of commonly used authorities in a UI.",
        "This has no functional impact on the multisig or its functionality, but",
        "can be used to track commonly used authorities (ie, vault 1, vault 2, etc.)"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "createTransaction",
      "docs": [
        "Instruction to create a multisig transaction.",
        "Each transaction is tied to a single authority, and must be specified when",
        "creating the instruction below. authority 0 is reserved for internal",
        "instructions, whereas authorities 1 or greater refer to a vault,",
        "upgrade authority, or other."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "authorityIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "activateTransaction",
      "docs": [
        "Instruction to set the state of a transaction \"active\".",
        "\"active\" transactions can then be signed off by multisig members"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "addInstruction",
      "docs": [
        "Instruction to attach an instruction to a transaction.",
        "Transactions must be in the \"draft\" status, and any",
        "signer (aside from execution payer) specified in an instruction",
        "must match the authority PDA specified during the transaction creation."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instruction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "incomingInstruction",
          "type": {
            "defined": "IncomingInstruction"
          }
        }
      ]
    },
    {
      "name": "approveTransaction",
      "docs": [
        "Instruction to approve a transaction on behalf of a member.",
        "The transaction must have an \"active\" status"
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "rejectTransaction",
      "docs": [
        "Instruction to reject a transaction.",
        "The transaction must have an \"active\" status."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "cancelTransaction",
      "docs": [
        "Instruction to cancel a transaction.",
        "Transactions must be in the \"executeReady\" status.",
        "Transaction will only be cancelled if the number of",
        "cancellations reaches the threshold. A cancelled",
        "transaction will no longer be able to be executed."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "executeTransaction",
      "docs": [
        "Instruction to execute a transaction.",
        "Transaction status must be \"executeReady\", and the account list must match",
        "the unique indexed accounts in the following manner:",
        "[ix_1_account, ix_1_program_account, ix_1_remaining_account_1, ix_1_remaining_account_2, ...]",
        "",
        "Refer to the README for more information on how to construct the account list."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "accountList",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "executeInstruction",
      "docs": [
        "Instruction to sequentially execute attached instructions.",
        "Instructions executed in this matter must be executed in order,",
        "this may be helpful for processing large batch transfers.",
        "This instruction can only be used for transactions with an authority",
        "index of 1 or greater.",
        "",
        "NOTE - do not use this instruction if there is not total clarity around",
        "potential side effects, as this instruction implies that the approved",
        "transaction will be executed partially, and potentially spread out over",
        "a period of time. This could introduce problems with state and failed",
        "transactions. For example: a program invoked in one of these instructions",
        "may be upgraded between executions and potentially leave one of the",
        "necessary accounts in an invalid state."
      ],
      "accounts": [
        {
          "name": "multisig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "transaction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instruction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "member",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "ms",
      "docs": [
        "Ms is the basic state account for a multisig."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "threshold",
            "type": "u16"
          },
          {
            "name": "authorityIndex",
            "type": "u16"
          },
          {
            "name": "transactionIndex",
            "type": "u32"
          },
          {
            "name": "msChangeIndex",
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "createKey",
            "type": "publicKey"
          },
          {
            "name": "allowExternalExecute",
            "type": "bool"
          },
          {
            "name": "keys",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "msTransaction",
      "docs": [
        "The MsTransaction is the state account for a multisig transaction"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "ms",
            "type": "publicKey"
          },
          {
            "name": "transactionIndex",
            "type": "u32"
          },
          {
            "name": "authorityIndex",
            "type": "u32"
          },
          {
            "name": "authorityBump",
            "type": "u8"
          },
          {
            "name": "status",
            "type": {
              "defined": "MsTransactionStatus"
            }
          },
          {
            "name": "instructionIndex",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "approved",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "rejected",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "cancelled",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "executedIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "msInstruction",
      "docs": [
        "The state account for an instruction that is attached to a transaction.",
        "Almost analogous to the native Instruction struct for solana, but with an extra",
        "field for the bump."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "keys",
            "type": {
              "vec": {
                "defined": "MsAccountMeta"
              }
            }
          },
          {
            "name": "data",
            "type": "bytes"
          },
          {
            "name": "instructionIndex",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "executed",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "MsAccountMeta",
      "docs": [
        "Wrapper for our internal MsInstruction key serialization schema",
        "MsAccount meta is identical to the AccountMeta struct, but defined",
        "here for serialization purposes."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "isSigner",
            "type": "bool"
          },
          {
            "name": "isWritable",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "IncomingInstruction",
      "docs": [
        "Incoming instruction schema, used as an argument in the attach_instruction.",
        "Identical to the solana struct for Instruction, but uses the MsAccountMeta.",
        "Provided for de/serialization purposes."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "keys",
            "type": {
              "vec": {
                "defined": "MsAccountMeta"
              }
            }
          },
          {
            "name": "data",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "MsTransactionStatus",
      "docs": [
        "MsTransactionStatus enum of the current status of the Multisig Transaction."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Draft"
          },
          {
            "name": "Active"
          },
          {
            "name": "ExecuteReady"
          },
          {
            "name": "Executed"
          },
          {
            "name": "Rejected"
          },
          {
            "name": "Cancelled"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "KeyNotInMultisig"
    },
    {
      "code": 6001,
      "name": "InvalidTransactionState"
    },
    {
      "code": 6002,
      "name": "InvalidNumberOfAccounts"
    },
    {
      "code": 6003,
      "name": "InvalidInstructionAccount"
    },
    {
      "code": 6004,
      "name": "InvalidAuthorityIndex"
    },
    {
      "code": 6005,
      "name": "TransactionAlreadyExecuted"
    },
    {
      "code": 6006,
      "name": "CannotRemoveSoloMember"
    },
    {
      "code": 6007,
      "name": "InvalidThreshold"
    },
    {
      "code": 6008,
      "name": "DeprecatedTransaction"
    },
    {
      "code": 6009,
      "name": "InstructionFailed"
    },
    {
      "code": 6010,
      "name": "MaxMembersReached"
    },
    {
      "code": 6011,
      "name": "EmptyMembers"
    },
    {
      "code": 6012,
      "name": "PartialExecution"
    },
    {
      "code": 6013,
      "name": "NotEnoughLamports"
    }
  ]
};
