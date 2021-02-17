/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import {BatchManager} from "./BatchManager";

export class BatchManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BatchManager> {
    return super.deploy(overrides || {}) as Promise<BatchManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BatchManager {
    return super.attach(address) as BatchManager;
  }
  connect(signer: Signer): BatchManagerFactory {
    return super.connect(signer) as BatchManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchManager {
    return new Contract(address, _abi, signerOrProvider) as BatchManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "batchID",
        type: "uint256"
      }
    ],
    name: "BatchRollback",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "committer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "enum Types.Usage",
        name: "batchType",
        type: "uint8"
      }
    ],
    name: "NewBatch",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalBatchesSlashed",
        type: "uint256"
      }
    ],
    name: "RollbackFinalisation",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "committed",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "batchID",
        type: "uint256"
      }
    ],
    name: "StakeWithdraw",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "batches",
    outputs: [
      {
        internalType: "bytes32",
        name: "commitmentRoot",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "meta",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "chooser",
    outputs: [
      {
        internalType: "contract Chooser",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "depositManager",
    outputs: [
      {
        internalType: "contract IDepositManager",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "deposits",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "batchID",
        type: "uint256"
      }
    ],
    name: "getBatch",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "commitmentRoot",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "meta",
            type: "bytes32"
          }
        ],
        internalType: "struct Types.Batch",
        name: "batch",
        type: "tuple"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "invalidBatchMarker",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "keepRollingBack",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "nextBatchID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "paramBlocksToFinalise",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "paramMaxTxsPerCommit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "paramMinGasLeft",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "paramStakeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "batchID",
        type: "uint256"
      }
    ],
    name: "withdrawStake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "withdrawalBitmap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405267016345785d8a000060005560006001556127106002556020600355600060075534801561003157600080fd5b50610be7806100416000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063ac96f0cd1161008c578063ca858d9d11610066578063ca858d9d146101ab578063d1b243e2146101b3578063e42f7554146101bb578063fe5f9604146101c3576100ea565b8063ac96f0cd1461016f578063b02c43d014610177578063b32c4d8d1461018a576100ea565b80635b097d37116100c85780635b097d37146101425780636c7ac9d81461014a57806398d176211461015f578063a72598ce14610167576100ea565b806325d5971f146100ef57806331c2b7db146101045780635ac4428214610122575b600080fd5b6101026100fd3660046107f3565b6101d6565b005b61010c61032a565b6040516101199190610a7a565b60405180910390f35b6101356101303660046107f3565b610330565b6040516101199190610b15565b61010c610390565b610152610396565b6040516101199190610a96565b6101526103a5565b61010c6103b4565b6101026103ba565b61010c6101853660046107f3565b6103e6565b61019d6101983660046107f3565b6103f8565b604051610119929190610a88565b61010c610411565b61010c610417565b61010c61041d565b61010c6101d13660046107f3565b610423565b600081815260066020908152604091829020825180840190935280548352600101549082015261020590610435565b6001600160a01b0316336001600160a01b03161461023e5760405162461bcd60e51b815260040161023590610ac5565b60405180910390fd5b600081815260066020908152604091829020825180840190935280548352600101549082015261026d9061044b565b431161028b5760405162461bcd60e51b815260040161023590610ad5565b61029681600961045b565b156102b35760405162461bcd60e51b815260040161023590610b05565b6102be816009610481565b60008054604051339282156108fc02929190818181858888f193505050501580156102ed573d6000803e3d6000fd5b507f1248d48e2de900a1010c7fce73506969ecec243600bfc08b641b158f26d857cd338260405161031f929190610a5f565b60405180910390a150565b60015481565b6103386107d1565b6000828152600660205260409020600101546103665760405162461bcd60e51b815260040161023590610af5565b50600090815260066020908152604091829020825180840190935280548352600101549082015290565b600a5481565b6004546001600160a01b031681565b6005546001600160a01b031681565b60075481565b6000600a54116103dc5760405162461bcd60e51b815260040161023590610ab5565b6103e46104a9565b565b60086020526000908152604090205481565b6006602052600090815260409020805460019091015482565b60025481565b60005481565b60035481565b60096020526000908152604090205481565b602081015160501c6001600160a01b0316919050565b6020015160301c63ffffffff1690565b6101008204600090815260208290526040902054600160ff84161b908116145b92915050565b61010082046000908152602091909152604090208054600160ff9093169290921b9091179055565b6007546000908190600019015b600a5481106105aa576002545a116104cd576105aa565b600081815260066020908152604080832083815560010183905560089091529020549250821561055957600480546040516356f0001360e11b81526001600160a01b039091169163ade000269161052691879101610a7a565b600060405180830381600087803b15801561054057600080fd5b505af1158015610554573d6000803e3d6000fd5b505050505b600780546000190190556040516001909201917fd1273cb450780431aa88c2a774163d0be3a1e505ff453810334d2151097c6dbe90610599908390610a7a565b60405180910390a1600019016104b6565b50600a5460075414156105bd576000600a555b600080546105d290839063ffffffff6106a916565b905060006105f860036105ec84600263ffffffff6106a916565b9063ffffffff6106ea16565b9050600061060c838363ffffffff61072c16565b604051909150339083156108fc029084906000818181858888f1935050505015801561063c573d6000803e3d6000fd5b5060405160009082156108fc0290839083818181858288f1935050505015801561066a573d6000803e3d6000fd5b507f8efd02dfe309f172ea08425236aa43cec05abc25ebbb9cd4ed1de0d5048fc91a8460405161069a9190610a7a565b60405180910390a15050505050565b6000826106b85750600061047b565b828202828482816106c557fe5b04146106e35760405162461bcd60e51b815260040161023590610ae5565b9392505050565b60006106e383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061076e565b60006106e383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506107a5565b6000818361078f5760405162461bcd60e51b81526004016102359190610aa4565b50600083858161079b57fe5b0495945050505050565b600081848411156107c95760405162461bcd60e51b81526004016102359190610aa4565b505050900390565b604080518082019091526000808252602082015290565b803561047b81610b8d565b60006020828403121561080557600080fd5b600061081184846107e8565b949350505050565b61082281610b3f565b82525050565b61082281610b30565b61082281610b46565b600061084582610b23565b61084f8185610b27565b935061085f818560208601610b57565b61086881610b83565b9093019392505050565b600061087f602183610b27565b7f42617463684d616e616765723a204973206e6f7420726f6c6c696e67206261638152606b60f81b602082015260400192915050565b60006108c2603083610b27565b7f596f7520617265206e6f742074686520636f727265637420636f6d6d6974746581526f0e440ccdee440e8d0d2e640c4c2e8c6d60831b602082015260400192915050565b6000610914603183610b27565b7f54686973206261746368206973206e6f74207965742066696e616c697365642c81527020636865636b206261636b20736f6f6e2160781b602082015260400192915050565b6000610967602183610b27565b7f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f8152607760f81b602082015260400192915050565b60006109aa603f83610b27565b7f42617463682069642067726561746572207468616e20746f74616c206e756d6281527f6572206f6620626174636865732c20696e76616c696420626174636820696400602082015260400192915050565b6000610a09601983610b27565b7f526f6c6c75703a20416c72656164792077697468647261776e00000000000000815260200192915050565b80516040830190610a468482610828565b506020820151610a596020850182610828565b50505050565b60408101610a6d8285610819565b6106e36020830184610828565b6020810161047b8284610828565b60408101610a6d8285610828565b6020810161047b8284610831565b602080825281016106e3818461083a565b6020808252810161047b81610872565b6020808252810161047b816108b5565b6020808252810161047b81610907565b6020808252810161047b8161095a565b6020808252810161047b8161099d565b6020808252810161047b816109fc565b6040810161047b8284610a35565b5190565b90815260200190565b90565b6001600160a01b031690565b600061047b825b600061047b82600061047b82610b33565b60005b83811015610b72578181015183820152602001610b5a565b83811115610a595750506000910152565b601f01601f191690565b610b9681610b30565b8114610ba157600080fd5b5056fea365627a7a72315820a4a48d4b12c9b4015b09f99c3e503fa35e2cc9f6d0133365c7461b69de7d030b6c6578706572696d656e74616cf564736f6c634300050f0040";