/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import {FrontendUtilities} from "./FrontendUtilities";

export class FrontendUtilitiesFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _depositManager: string,
    _accountRegistry: string,
    overrides?: Overrides
  ): Promise<FrontendUtilities> {
    return super.deploy(
      _depositManager,
      _accountRegistry,
      overrides || {}
    ) as Promise<FrontendUtilities>;
  }
  getDeployTransaction(
    _depositManager: string,
    _accountRegistry: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _depositManager,
      _accountRegistry,
      overrides || {}
    );
  }
  attach(address: string): FrontendUtilities {
    return super.attach(address) as FrontendUtilities;
  }
  connect(signer: Signer): FrontendUtilitiesFactory {
    return super.connect(signer) as FrontendUtilitiesFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FrontendUtilities {
    return new Contract(address, _abi, signerOrProvider) as FrontendUtilities;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract DepositManager",
        name: "_depositManager",
        type: "address"
      },
      {
        internalType: "contract BLSAccountRegistry",
        name: "_accountRegistry",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: true,
    inputs: [],
    name: "accountRegistry",
    outputs: [
      {
        internalType: "contract BLSAccountRegistry",
        name: "",
        type: "address"
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
        internalType: "uint256[4]",
        name: "pubkey",
        type: "uint256[4]"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenID",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "depositManager",
    outputs: [
      {
        internalType: "contract DepositManager",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161041438038061041483398101604081905261002f91610071565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100e4565b805161006b816100cd565b92915050565b6000806040838503121561008457600080fd5b60006100908585610060565b92505060206100a185828601610060565b9150509250929050565b600061006b826100c1565b600061006b826100ab565b6001600160a01b031690565b6100d6816100b6565b81146100e157600080fd5b50565b610321806100f36000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80636c7ac9d8146100465780638aeebf2014610064578063d089e11a14610079575b600080fd5b61004e610081565b60405161005b9190610265565b60405180910390f35b6100776100723660046101bc565b610090565b005b61004e610180565b6000546001600160a01b031681565b6001546040516395e4bf0360e01b81526000916001600160a01b0316906395e4bf03906100c1908790600401610257565b602060405180830381600087803b1580156100db57600080fd5b505af11580156100ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506101139190810190610209565b600054604051634b37ed3160e11b81529192506001600160a01b03169063966fda629061014890849087908790600401610273565b600060405180830381600087803b15801561016257600080fd5b505af1158015610176573d6000803e3d6000fd5b5050505050505050565b6001546001600160a01b031681565b80608081018310156101a057600080fd5b92915050565b80356101a0816102c7565b80516101a0816102c7565b600080600060c084860312156101d157600080fd5b60006101dd868661018f565b93505060806101ee868287016101a6565b92505060a06101ff868287016101a6565b9150509250925092565b60006020828403121561021b57600080fd5b600061022784846101b1565b949350505050565b61023b608083836102bb565b5050565b610248816102aa565b82525050565b610248816102a7565b608081016101a0828461022f565b602081016101a0828461023f565b60608101610281828661024e565b61028e602083018561024e565b610227604083018461024e565b6001600160a01b031690565b90565b60006101a08260006101a08261029b565b82818337506000910152565b6102d0816102a7565b81146102db57600080fd5b5056fea365627a7a7231582099c7d5369462045c8cd475ca193a5f473caebdba9d59ea12185a3c28fa31a18a6c6578706572696d656e74616cf564736f6c634300050f0040";