/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import {TestTypes} from "./TestTypes";

export class TestTypesFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestTypes> {
    return super.deploy(overrides || {}) as Promise<TestTypes>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestTypes {
    return super.attach(address) as TestTypes;
  }
  connect(signer: Signer): TestTypesFactory {
    return super.connect(signer) as TestTypesFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTypes {
    return new Contract(address, _abi, signerOrProvider) as TestTypes;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "bytes32",
        name: "meta",
        type: "bytes32"
      }
    ],
    name: "decodeMeta",
    outputs: [
      {
        internalType: "uint256",
        name: "batchType",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "size",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "committer",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "finaliseOn",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "batchType",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "commitmentLength",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "committer",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "finaliseOn",
        type: "uint256"
      }
    ],
    name: "encodeMeta",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061030c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637a7f59af1461003b578063ed7adbec14610064575b600080fd5b61004e6100493660046101d3565b610087565b60405161005b919061024c565b60405180910390f35b6100776100723660046101ad565b61009e565b60405161005b949392919061025a565b6000610095858585856100f6565b95945050505050565b6000806000806100ac61017a565b506040805180820190915260008152602081018690526100cb8161013d565b94506100d681610147565b93506100e181610154565b92506100ec8161016a565b9150509193509193565b69ffffffff000000000000603082901b16600160501b600160f01b03605084901b1660ff60f01b60f086901b166001600160f81b031960f888901b16171717949350505050565b6020015160f81c90565b6020015160f01c60ff1690565b602081015160501c6001600160a01b0316919050565b6020015160301c63ffffffff1690565b604080518082019091526000808252602082015290565b803561019c816102a9565b92915050565b803561019c816102c0565b6000602082840312156101bf57600080fd5b60006101cb84846101a2565b949350505050565b600080600080608085870312156101e957600080fd5b60006101f587876101a2565b9450506020610206878288016101a2565b935050604061021787828801610191565b9250506060610228878288016101a2565b91505092959194509250565b61023d8161028f565b82525050565b61023d8161029a565b6020810161019c8284610243565b608081016102688287610243565b6102756020830186610243565b6102826040830185610234565b6100956060830184610243565b600061019c8261029d565b90565b6001600160a01b031690565b6102b28161028f565b81146102bd57600080fd5b50565b6102b28161029a56fea365627a7a72315820c802c0f35c03304945e95670c96709ea9cd9d357ab188898b7e7977df56499fa6c6578706572696d656e74616cf564736f6c634300050f0040";
