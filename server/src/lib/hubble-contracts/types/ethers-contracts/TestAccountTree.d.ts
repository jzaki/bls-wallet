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
  CallOverrides
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface TestAccountTreeInterface extends ethers.utils.Interface {
  functions: {
    "BATCH_DEPTH()": FunctionFragment;
    "BATCH_SIZE()": FunctionFragment;
    "DEPTH()": FunctionFragment;
    "SET_SIZE()": FunctionFragment;
    "WITNESS_LENGTH()": FunctionFragment;
    "checkInclusion(bytes32,uint256,bytes32[31])": FunctionFragment;
    "filledSubtreesLeft(uint256)": FunctionFragment;
    "filledSubtreesRight(uint256)": FunctionFragment;
    "leafIndexLeft()": FunctionFragment;
    "leafIndexRight()": FunctionFragment;
    "root()": FunctionFragment;
    "rootLeft()": FunctionFragment;
    "rootRight()": FunctionFragment;
    "updateBatch(bytes32[16])": FunctionFragment;
    "updateSingle(bytes32)": FunctionFragment;
    "zeros(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BATCH_DEPTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BATCH_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "DEPTH", values?: undefined): string;
  encodeFunctionData(functionFragment: "SET_SIZE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "WITNESS_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkInclusion",
    values: [BytesLike, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtreesLeft",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtreesRight",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "leafIndexLeft",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "leafIndexRight",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "root", values?: undefined): string;
  encodeFunctionData(functionFragment: "rootLeft", values?: undefined): string;
  encodeFunctionData(functionFragment: "rootRight", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateBatch",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSingle",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "BATCH_DEPTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "BATCH_SIZE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DEPTH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SET_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "WITNESS_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkInclusion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtreesLeft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtreesRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "leafIndexLeft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "leafIndexRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rootLeft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rootRight", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;

  events: {};
}

export class TestAccountTree extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestAccountTreeInterface;

  functions: {
    BATCH_DEPTH(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "BATCH_DEPTH()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    BATCH_SIZE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "BATCH_SIZE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    DEPTH(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "DEPTH()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    SET_SIZE(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "SET_SIZE()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    WITNESS_LENGTH(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "WITNESS_LENGTH()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    checkInclusion(
      leaf: BytesLike,
      leafIndex: BigNumberish,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkInclusion(bytes32,uint256,bytes32[31])"(
      leaf: BytesLike,
      leafIndex: BigNumberish,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    filledSubtreesLeft(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "filledSubtreesLeft(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    filledSubtreesRight(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "filledSubtreesRight(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    leafIndexLeft(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "leafIndexLeft()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    leafIndexRight(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "leafIndexRight()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    root(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "root()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    rootLeft(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "rootLeft()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    rootRight(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "rootRight()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    updateBatch(
      leafs: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateBatch(bytes32[16])"(
      leafs: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateSingle(
      leaf: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateSingle(bytes32)"(
      leaf: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    zeros(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "zeros(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  BATCH_DEPTH(overrides?: CallOverrides): Promise<BigNumber>;

  "BATCH_DEPTH()"(overrides?: CallOverrides): Promise<BigNumber>;

  BATCH_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  "BATCH_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

  DEPTH(overrides?: CallOverrides): Promise<BigNumber>;

  "DEPTH()"(overrides?: CallOverrides): Promise<BigNumber>;

  SET_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  "SET_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

  WITNESS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  "WITNESS_LENGTH()"(overrides?: CallOverrides): Promise<BigNumber>;

  checkInclusion(
    leaf: BytesLike,
    leafIndex: BigNumberish,
    witness: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkInclusion(bytes32,uint256,bytes32[31])"(
    leaf: BytesLike,
    leafIndex: BigNumberish,
    witness: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  filledSubtreesLeft(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "filledSubtreesLeft(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  filledSubtreesRight(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "filledSubtreesRight(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  leafIndexLeft(overrides?: CallOverrides): Promise<BigNumber>;

  "leafIndexLeft()"(overrides?: CallOverrides): Promise<BigNumber>;

  leafIndexRight(overrides?: CallOverrides): Promise<BigNumber>;

  "leafIndexRight()"(overrides?: CallOverrides): Promise<BigNumber>;

  root(overrides?: CallOverrides): Promise<string>;

  "root()"(overrides?: CallOverrides): Promise<string>;

  rootLeft(overrides?: CallOverrides): Promise<string>;

  "rootLeft()"(overrides?: CallOverrides): Promise<string>;

  rootRight(overrides?: CallOverrides): Promise<string>;

  "rootRight()"(overrides?: CallOverrides): Promise<string>;

  updateBatch(
    leafs: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateBatch(bytes32[16])"(
    leafs: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateSingle(
    leaf: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateSingle(bytes32)"(
    leaf: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  zeros(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "zeros(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    BATCH_DEPTH(overrides?: CallOverrides): Promise<BigNumber>;

    "BATCH_DEPTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    BATCH_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "BATCH_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    DEPTH(overrides?: CallOverrides): Promise<BigNumber>;

    "DEPTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    SET_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "SET_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    WITNESS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    "WITNESS_LENGTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    checkInclusion(
      leaf: BytesLike,
      leafIndex: BigNumberish,
      witness: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    "checkInclusion(bytes32,uint256,bytes32[31])"(
      leaf: BytesLike,
      leafIndex: BigNumberish,
      witness: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: boolean;
    }>;

    filledSubtreesLeft(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "filledSubtreesLeft(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    filledSubtreesRight(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "filledSubtreesRight(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    leafIndexLeft(overrides?: CallOverrides): Promise<BigNumber>;

    "leafIndexLeft()"(overrides?: CallOverrides): Promise<BigNumber>;

    leafIndexRight(overrides?: CallOverrides): Promise<BigNumber>;

    "leafIndexRight()"(overrides?: CallOverrides): Promise<BigNumber>;

    root(overrides?: CallOverrides): Promise<string>;

    "root()"(overrides?: CallOverrides): Promise<string>;

    rootLeft(overrides?: CallOverrides): Promise<string>;

    "rootLeft()"(overrides?: CallOverrides): Promise<string>;

    rootRight(overrides?: CallOverrides): Promise<string>;

    "rootRight()"(overrides?: CallOverrides): Promise<string>;

    updateBatch(
      leafs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "updateBatch(bytes32[16])"(
      leafs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateSingle(
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "updateSingle(bytes32)"(
      leaf: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    zeros(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "zeros(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    BATCH_DEPTH(overrides?: CallOverrides): Promise<BigNumber>;

    "BATCH_DEPTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    BATCH_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "BATCH_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    DEPTH(overrides?: CallOverrides): Promise<BigNumber>;

    "DEPTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    SET_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "SET_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    WITNESS_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    "WITNESS_LENGTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    checkInclusion(
      leaf: BytesLike,
      leafIndex: BigNumberish,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkInclusion(bytes32,uint256,bytes32[31])"(
      leaf: BytesLike,
      leafIndex: BigNumberish,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    filledSubtreesLeft(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "filledSubtreesLeft(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    filledSubtreesRight(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "filledSubtreesRight(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    leafIndexLeft(overrides?: CallOverrides): Promise<BigNumber>;

    "leafIndexLeft()"(overrides?: CallOverrides): Promise<BigNumber>;

    leafIndexRight(overrides?: CallOverrides): Promise<BigNumber>;

    "leafIndexRight()"(overrides?: CallOverrides): Promise<BigNumber>;

    root(overrides?: CallOverrides): Promise<BigNumber>;

    "root()"(overrides?: CallOverrides): Promise<BigNumber>;

    rootLeft(overrides?: CallOverrides): Promise<BigNumber>;

    "rootLeft()"(overrides?: CallOverrides): Promise<BigNumber>;

    rootRight(overrides?: CallOverrides): Promise<BigNumber>;

    "rootRight()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateBatch(leafs: BytesLike[], overrides?: Overrides): Promise<BigNumber>;

    "updateBatch(bytes32[16])"(
      leafs: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    updateSingle(leaf: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "updateSingle(bytes32)"(
      leaf: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    zeros(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "zeros(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BATCH_DEPTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BATCH_DEPTH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BATCH_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BATCH_SIZE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEPTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DEPTH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SET_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SET_SIZE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WITNESS_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WITNESS_LENGTH()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkInclusion(
      leaf: BytesLike,
      leafIndex: BigNumberish,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkInclusion(bytes32,uint256,bytes32[31])"(
      leaf: BytesLike,
      leafIndex: BigNumberish,
      witness: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    filledSubtreesLeft(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "filledSubtreesLeft(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    filledSubtreesRight(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "filledSubtreesRight(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    leafIndexLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "leafIndexLeft()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    leafIndexRight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "leafIndexRight()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    root(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "root()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rootLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rootLeft()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rootRight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rootRight()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateBatch(
      leafs: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateBatch(bytes32[16])"(
      leafs: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateSingle(
      leaf: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateSingle(bytes32)"(
      leaf: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    zeros(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "zeros(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}