// export const StoreData_Contract_Address = "0x0AF3298577e351dac1944f49AC8a451c3baE1ED4";
// export const StoreData_Contract_Address = "0xe9B23C5C2aF588db236a4C7a2Da6c951dFF00db6";
export const StoreData_Contract_Address =
  '0x752cf60Fd0bDEc104a1709d6F63995F4C4557728';

export const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "acceptMainUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_middle_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sur_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_date_of_birth",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_phone_no",
				"type": "uint256"
			}
		],
		"name": "addInfo",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "your_user_id",
				"type": "uint8"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_userid",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_workid",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "allowedUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_userid",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_data",
				"type": "string"
			}
		],
		"name": "inputData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_userid",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_workid",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "removeAllowedUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_mainuser",
				"type": "address"
			}
		],
		"name": "removeMainUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestMainUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_id",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_newAddress",
				"type": "string"
			}
		],
		"name": "updateAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_id",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_newemail",
				"type": "string"
			}
		],
		"name": "updateEmail",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_id",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_new_first_name",
				"type": "string"
			}
		],
		"name": "updateFirstName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_workid",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_userid",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "updatetitile",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "updateimage",
				"type": "string"
			}
		],
		"name": "updateInputData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_id",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_new_middle_name",
				"type": "string"
			}
		],
		"name": "updateMiddleName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_id",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_newpassword",
				"type": "string"
			}
		],
		"name": "updatePassword",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_id",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_new_phone_number",
				"type": "uint256"
			}
		],
		"name": "updatePhone",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_id",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_new_sur_name",
				"type": "string"
			}
		],
		"name": "updateSurName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_userid",
				"type": "uint8"
			}
		],
		"name": "getalldata",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "images",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "titles",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "workids",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_userid",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_workId",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getDataCollaborator",
		"outputs": [
			{
				"internalType": "string",
				"name": "_Image",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Ttile",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "workid",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_userId",
				"type": "uint8"
			}
		],
		"name": "getGuestData",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRequestedUser",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_userid",
				"type": "uint8"
			}
		],
		"name": "getupdateddata",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "data",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "data2",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserId",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
