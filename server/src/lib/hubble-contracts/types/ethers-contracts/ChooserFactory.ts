/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from "ethers";
import {Provider} from "@ethersproject/providers";

import {Chooser} from "./Chooser";

export class ChooserFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Chooser {
    return new Contract(address, _abi, signerOrProvider) as Chooser;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "getProposer",
    outputs: [
      {
        internalType: "address",
        name: "proposer",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];
