/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import {TestAccountTree} from "./TestAccountTree";

export class TestAccountTreeFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestAccountTree> {
    return super.deploy(overrides || {}) as Promise<TestAccountTree>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestAccountTree {
    return super.attach(address) as TestAccountTree;
  }
  connect(signer: Signer): TestAccountTreeFactory {
    return super.connect(signer) as TestAccountTreeFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAccountTree {
    return new Contract(address, _abi, signerOrProvider) as TestAccountTree;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "BATCH_DEPTH",
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
    name: "BATCH_SIZE",
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
    name: "DEPTH",
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
    name: "SET_SIZE",
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
    name: "WITNESS_LENGTH",
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
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256"
      },
      {
        internalType: "bytes32[31]",
        name: "witness",
        type: "bytes32[31]"
      }
    ],
    name: "checkInclusion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
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
    name: "filledSubtreesLeft",
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
        name: "",
        type: "uint256"
      }
    ],
    name: "filledSubtreesRight",
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
    inputs: [],
    name: "leafIndexLeft",
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
    name: "leafIndexRight",
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
    name: "root",
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
    inputs: [],
    name: "rootLeft",
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
    inputs: [],
    name: "rootRight",
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
    constant: false,
    inputs: [
      {
        internalType: "bytes32[16]",
        name: "leafs",
        type: "bytes32[16]"
      }
    ],
    name: "updateBatch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32"
      }
    ],
    name: "updateSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
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
    name: "zeros",
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
  }
];

const _bytecode =
  "0x60806040526000600381905560045560015b601f8110156100e257600560018203601f811061002a57fe5b0154600560018303601f811061003c57fe5b0154604051602001808381526020018281526020019250505060405160208183030381529060405280519060200120600582601f811061007857fe5b0155601f8110156100a257600581601f811061009057fe5b0154602482601f811061009f57fe5b01555b806004111580156100b3575080601f115b156100da57600581601f81106100c557fe5b0154604360048303601b81106100d757fe5b01555b600101610011565b5060235460408051602080820184905281830184905282518083038401815260608301845280519082012060008181556080840186905260a0808501969096528451808503909601865260c084018552855195830195909520600181905560e0840191909152610100808401919091528351808403909101815261012090920190925280519101206002556107ce90819061017d90396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806398366e3511610097578063d828946311610066578063d8289463146101e8578063e6f72663146101f0578063e82955881461020d578063ebf0c7171461022a57610100565b806398366e35146101a3578063cab2da9b146101d0578063d0383d68146101d8578063d7c53ea7146101e057610100565b806349faa4d4116100d357806349faa4d41461019b5780635e71468b146101a3578063693c1db7146101ab5780638d037962146101b357610100565b8063034a29ae146101055780630c1d6345146101345780631c76e77e1461015157806345dfa98c14610159575b600080fd5b6101226004803603602081101561011b57600080fd5b5035610232565b60408051918252519081900360200190f35b610122600480360361020081101561014b57600080fd5b50610246565b610122610288565b610182600480360361042081101561017057600080fd5b5080359060208101359060400161028d565b6040805192835290151560208301528051918290030190f35b6101226102dc565b6101226102e1565b6101226102e6565b610122600480360360208110156101c957600080fd5b50356102ec565b6101226102f9565b6101226102ff565b610122610307565b61012261030d565b6101226004803603602081101561020657600080fd5b5035610313565b6101226004803603602081101561022357600080fd5b5035610322565b61012261032f565b602481601f811061023f57fe5b0154905081565b6000805a905061027e836010806020026040519081016040528092919082601060200280828437600092019190915250610335915050565b505a900392915050565b600481565b60008060005a905060006102cb878787601f806020026040519081016040528092919082601f60200280828437600092019190915250610547915050565b90505a909103969095509350505050565b601081565b601f81565b60035481565b604381601b811061023f57fe5b60015481565b638000000081565b60045481565b60005481565b6000805a905061027e8361062a565b600581601f811061023f57fe5b60025481565b600454600090637fffffef11610392576040805162461bcd60e51b815260206004820152601f60248201527f4163636f756e74547265653a207269676874207365742069732066756c6c2000604482015290519081900360640190fd5b60005b60048110156104305760001960048290030160005b6001821b81101561042657600181901b8581601081106103c657fe5b60200201518682600101601081106103da57fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012086836010811061041857fe5b6020020152506001016103aa565b5050600101610395565b508151600454601090046000805b601b81101561050057826001166001141561049757604381601b811061046057fe5b01548460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093506104f4565b816104b15783604382601b81106104aa57fe5b0155600191505b83600560048301601f81106104c257fe5b015460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b600192831c920161043e565b505050600181905560005460408051602080820193909352808201939093528051808403820181526060909301905281519101206002555050600480546010810190915590565b6000637fffffff831684825b601f8110156105fc5782600116600114156105ae578481601f811061057457fe5b60200201518260405160200180838152602001828152602001925050506040516020818303038152906040528051906020012091506105f0565b818582601f81106105bb57fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012091505b600192831c9201610553565b506380000000851015610616576000541491506106239050565b6001541491506106239050565b9392505050565b600354600090637fffffff11610687576040805162461bcd60e51b815260206004820152601e60248201527f4163636f756e74547265653a206c656674207365742069732066756c6c200000604482015290519081900360640190fd5b60035482906000805b601f81101561074f5782600116600114156106e957602481601f81106106b257fe5b0154846040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209350610743565b816107035783602482601f81106106fc57fe5b0155600191505b83600582601f811061071157fe5b015460405160200180838152602001828152602001925050506040516020818303038152906040528051906020012093505b600192831c9201610690565b50505060008190556001805460408051602080820195909552808201929092528051808303820181526060909201905280519201919091206002556003805491820190559291505056fea265627a7a72315820331efae41014e463cc3a347e056f2e075d2dd3af73f87cb032a27ac8cb4e7ea864736f6c634300050f0032";