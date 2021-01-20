/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface BurnAuctionInterface extends ethers.utils.Interface {
  functions: {
    "BLOCKS_PER_SLOT()": FunctionFragment;
    "DELTA_BLOCKS_INITIAL_SLOT()": FunctionFragment;
    "DONATION_DENOMINATOR()": FunctionFragment;
    "auction(uint32)": FunctionFragment;
    "bid(uint256)": FunctionFragment;
    "block2slot(uint256)": FunctionFragment;
    "currentSlot()": FunctionFragment;
    "deposits(address)": FunctionFragment;
    "donationAddress()": FunctionFragment;
    "donationNumerator()": FunctionFragment;
    "genesisBlock()": FunctionFragment;
    "getBlockNumber()": FunctionFragment;
    "getProposer()": FunctionFragment;
    "witdraw(uint256)": FunctionFragment;
    "withdrawDonation()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BLOCKS_PER_SLOT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DELTA_BLOCKS_INITIAL_SLOT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DONATION_DENOMINATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "bid", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "block2slot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentSlot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deposits", values: [string]): string;
  encodeFunctionData(
    functionFragment: "donationAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "donationNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "genesisBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "witdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDonation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BLOCKS_PER_SLOT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DELTA_BLOCKS_INITIAL_SLOT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DONATION_DENOMINATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "auction", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "block2slot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentSlot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "donationAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "donationNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "genesisBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "witdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDonation",
    data: BytesLike
  ): Result;

  events: {
    "NewBestBid(uint32,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewBestBid"): EventFragment;
}

export class BurnAuction extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BurnAuctionInterface;

  functions: {
    BLOCKS_PER_SLOT(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "BLOCKS_PER_SLOT()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    DELTA_BLOCKS_INITIAL_SLOT(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "DELTA_BLOCKS_INITIAL_SLOT()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    DONATION_DENOMINATOR(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "DONATION_DENOMINATOR()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    auction(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coordinator: string;
      amount: BigNumber;
      initialized: boolean;
      0: string;
      1: BigNumber;
      2: boolean;
    }>;

    "auction(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coordinator: string;
      amount: BigNumber;
      initialized: boolean;
      0: string;
      1: BigNumber;
      2: boolean;
    }>;

    bid(
      bidAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "bid(uint256)"(
      bidAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    block2slot(
      numBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "block2slot(uint256)"(
      numBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    currentSlot(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "currentSlot()"(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    deposits(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "deposits(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    donationAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "donationAddress()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    donationNumerator(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "donationNumerator()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    genesisBlock(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "genesisBlock()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getBlockNumber(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getBlockNumber()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getProposer(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getProposer()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    witdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "witdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawDonation(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawDonation()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  BLOCKS_PER_SLOT(overrides?: CallOverrides): Promise<number>;

  "BLOCKS_PER_SLOT()"(overrides?: CallOverrides): Promise<number>;

  DELTA_BLOCKS_INITIAL_SLOT(overrides?: CallOverrides): Promise<number>;

  "DELTA_BLOCKS_INITIAL_SLOT()"(overrides?: CallOverrides): Promise<number>;

  DONATION_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

  "DONATION_DENOMINATOR()"(overrides?: CallOverrides): Promise<BigNumber>;

  auction(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    coordinator: string;
    amount: BigNumber;
    initialized: boolean;
    0: string;
    1: BigNumber;
    2: boolean;
  }>;

  "auction(uint32)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    coordinator: string;
    amount: BigNumber;
    initialized: boolean;
    0: string;
    1: BigNumber;
    2: boolean;
  }>;

  bid(
    bidAmount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "bid(uint256)"(
    bidAmount: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  block2slot(
    numBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "block2slot(uint256)"(
    numBlock: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  currentSlot(overrides?: CallOverrides): Promise<number>;

  "currentSlot()"(overrides?: CallOverrides): Promise<number>;

  deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "deposits(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  donationAddress(overrides?: CallOverrides): Promise<string>;

  "donationAddress()"(overrides?: CallOverrides): Promise<string>;

  donationNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  "donationNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

  genesisBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "genesisBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  "getBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

  getProposer(overrides?: CallOverrides): Promise<string>;

  "getProposer()"(overrides?: CallOverrides): Promise<string>;

  witdraw(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "witdraw(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawDonation(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawDonation()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    BLOCKS_PER_SLOT(overrides?: CallOverrides): Promise<number>;

    "BLOCKS_PER_SLOT()"(overrides?: CallOverrides): Promise<number>;

    DELTA_BLOCKS_INITIAL_SLOT(overrides?: CallOverrides): Promise<number>;

    "DELTA_BLOCKS_INITIAL_SLOT()"(overrides?: CallOverrides): Promise<number>;

    DONATION_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    "DONATION_DENOMINATOR()"(overrides?: CallOverrides): Promise<BigNumber>;

    auction(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coordinator: string;
      amount: BigNumber;
      initialized: boolean;
      0: string;
      1: BigNumber;
      2: boolean;
    }>;

    "auction(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coordinator: string;
      amount: BigNumber;
      initialized: boolean;
      0: string;
      1: BigNumber;
      2: boolean;
    }>;

    bid(bidAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "bid(uint256)"(
      bidAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    block2slot(
      numBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "block2slot(uint256)"(
      numBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    currentSlot(overrides?: CallOverrides): Promise<number>;

    "currentSlot()"(overrides?: CallOverrides): Promise<number>;

    deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "deposits(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    donationAddress(overrides?: CallOverrides): Promise<string>;

    "donationAddress()"(overrides?: CallOverrides): Promise<string>;

    donationNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "donationNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    genesisBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "genesisBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "getBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

    getProposer(overrides?: CallOverrides): Promise<string>;

    "getProposer()"(overrides?: CallOverrides): Promise<string>;

    witdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "witdraw(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawDonation(overrides?: CallOverrides): Promise<void>;

    "withdrawDonation()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    NewBestBid(slot: null, coordinator: null, amount: null): EventFilter;
  };

  estimateGas: {
    BLOCKS_PER_SLOT(overrides?: CallOverrides): Promise<BigNumber>;

    "BLOCKS_PER_SLOT()"(overrides?: CallOverrides): Promise<BigNumber>;

    DELTA_BLOCKS_INITIAL_SLOT(overrides?: CallOverrides): Promise<BigNumber>;

    "DELTA_BLOCKS_INITIAL_SLOT()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DONATION_DENOMINATOR(overrides?: CallOverrides): Promise<BigNumber>;

    "DONATION_DENOMINATOR()"(overrides?: CallOverrides): Promise<BigNumber>;

    auction(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "auction(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bid(
      bidAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "bid(uint256)"(
      bidAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    block2slot(
      numBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "block2slot(uint256)"(
      numBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentSlot(overrides?: CallOverrides): Promise<BigNumber>;

    "currentSlot()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "deposits(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    donationAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "donationAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    donationNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "donationNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    genesisBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "genesisBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "getBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

    getProposer(overrides?: CallOverrides): Promise<BigNumber>;

    "getProposer()"(overrides?: CallOverrides): Promise<BigNumber>;

    witdraw(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "witdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawDonation(overrides?: Overrides): Promise<BigNumber>;

    "withdrawDonation()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BLOCKS_PER_SLOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BLOCKS_PER_SLOT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DELTA_BLOCKS_INITIAL_SLOT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "DELTA_BLOCKS_INITIAL_SLOT()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DONATION_DENOMINATOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "DONATION_DENOMINATOR()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    auction(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "auction(uint32)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bid(
      bidAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "bid(uint256)"(
      bidAmount: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    block2slot(
      numBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "block2slot(uint256)"(
      numBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentSlot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentSlot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposits(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "deposits(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    donationAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "donationAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    donationNumerator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "donationNumerator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    genesisBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "genesisBlock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getBlockNumber()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getProposer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    witdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "witdraw(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawDonation(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawDonation()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
