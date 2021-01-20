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
  CallOverrides
} from "@ethersproject/contracts";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";

interface FrontendTransferInterface extends ethers.utils.Interface {
  functions: {
    "checkSignature(uint256[2],tuple,bytes32,bytes32,bytes32,bytes)": FunctionFragment;
    "compress(bytes[])": FunctionFragment;
    "decode(bytes)": FunctionFragment;
    "decompress(bytes)": FunctionFragment;
    "encode(tuple)": FunctionFragment;
    "process(bytes32,bytes,uint256,tuple,tuple)": FunctionFragment;
    "signBytes(bytes)": FunctionFragment;
    "validate(bytes,uint256[2],uint256[4],bytes32)": FunctionFragment;
    "validateAndApply(bytes,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkSignature",
    values: [
      BigNumberish[],
      {
        states: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        }[];
        stateWitnesses: BytesLike[][];
        pubkeys: BigNumberish[][];
        pubkeyWitnesses: BytesLike[][];
      },
      BytesLike,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "compress",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "decode", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "decompress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encode",
    values: [
      {
        txType: BigNumberish;
        fromIndex: BigNumberish;
        toIndex: BigNumberish;
        amount: BigNumberish;
        fee: BigNumberish;
        nonce: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "process",
    values: [
      BytesLike,
      BytesLike,
      BigNumberish,
      {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "signBytes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [BytesLike, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateAndApply",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "compress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decompress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "encode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signBytes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateAndApply",
    data: BytesLike
  ): Result;

  events: {};
}

export class FrontendTransfer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FrontendTransferInterface;

  functions: {
    checkSignature(
      signature: BigNumberish[],
      proof: {
        states: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        }[];
        stateWitnesses: BytesLike[][];
        pubkeys: BigNumberish[][];
        pubkeyWitnesses: BytesLike[][];
      },
      stateRoot: BytesLike,
      accountRoot: BytesLike,
      domain: BytesLike,
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "checkSignature(uint256[2],tuple,bytes32,bytes32,bytes32,bytes)"(
      signature: BigNumberish[],
      proof: {
        states: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        }[];
        stateWitnesses: BytesLike[][];
        pubkeys: BigNumberish[][];
        pubkeyWitnesses: BytesLike[][];
      },
      stateRoot: BytesLike,
      accountRoot: BytesLike,
      domain: BytesLike,
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    compress(
      encodedTxs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "compress(bytes[])"(
      encodedTxs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    decode(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      _tx: {
        txType: BigNumber;
        fromIndex: BigNumber;
        toIndex: BigNumber;
        amount: BigNumber;
        fee: BigNumber;
        nonce: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
      };
      0: {
        txType: BigNumber;
        fromIndex: BigNumber;
        toIndex: BigNumber;
        amount: BigNumber;
        fee: BigNumber;
        nonce: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
      };
    }>;

    "decode(bytes)"(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      _tx: {
        txType: BigNumber;
        fromIndex: BigNumber;
        toIndex: BigNumber;
        amount: BigNumber;
        fee: BigNumber;
        nonce: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
      };
      0: {
        txType: BigNumber;
        fromIndex: BigNumber;
        toIndex: BigNumber;
        amount: BigNumber;
        fee: BigNumber;
        nonce: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
      };
    }>;

    decompress(
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        fromIndex: BigNumber;
        toIndex: BigNumber;
        amount: BigNumber;
        fee: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
      }[];
    }>;

    "decompress(bytes)"(
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        fromIndex: BigNumber;
        toIndex: BigNumber;
        amount: BigNumber;
        fee: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
      }[];
    }>;

    encode(
      _tx: {
        txType: BigNumberish;
        fromIndex: BigNumberish;
        toIndex: BigNumberish;
        amount: BigNumberish;
        fee: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "encode(tuple)"(
      _tx: {
        txType: BigNumberish;
        fromIndex: BigNumberish;
        toIndex: BigNumberish;
        amount: BigNumberish;
        fee: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    process(
      stateRoot: BytesLike,
      encodedTx: BytesLike,
      tokenID: BigNumberish,
      from: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      to: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<{
      newRoot: string;
      result: number;
      0: string;
      1: number;
    }>;

    "process(bytes32,bytes,uint256,tuple,tuple)"(
      stateRoot: BytesLike,
      encodedTx: BytesLike,
      tokenID: BigNumberish,
      from: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      to: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<{
      newRoot: string;
      result: number;
      0: string;
      1: number;
    }>;

    signBytes(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "signBytes(bytes)"(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    validate(
      encodedTx: BytesLike,
      signature: BigNumberish[],
      pubkey: BigNumberish[],
      domain: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    "validate(bytes,uint256[2],uint256[4],bytes32)"(
      encodedTx: BytesLike,
      signature: BigNumberish[],
      pubkey: BigNumberish[],
      domain: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    validateAndApply(
      senderEncoded: BytesLike,
      receiverEncoded: BytesLike,
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      newSender: string;
      newReceiver: string;
      result: number;
      0: string;
      1: string;
      2: number;
    }>;

    "validateAndApply(bytes,bytes,bytes)"(
      senderEncoded: BytesLike,
      receiverEncoded: BytesLike,
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      newSender: string;
      newReceiver: string;
      result: number;
      0: string;
      1: string;
      2: number;
    }>;
  };

  checkSignature(
    signature: BigNumberish[],
    proof: {
      states: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      }[];
      stateWitnesses: BytesLike[][];
      pubkeys: BigNumberish[][];
      pubkeyWitnesses: BytesLike[][];
    },
    stateRoot: BytesLike,
    accountRoot: BytesLike,
    domain: BytesLike,
    txs: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  "checkSignature(uint256[2],tuple,bytes32,bytes32,bytes32,bytes)"(
    signature: BigNumberish[],
    proof: {
      states: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      }[];
      stateWitnesses: BytesLike[][];
      pubkeys: BigNumberish[][];
      pubkeyWitnesses: BytesLike[][];
    },
    stateRoot: BytesLike,
    accountRoot: BytesLike,
    domain: BytesLike,
    txs: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  compress(encodedTxs: BytesLike[], overrides?: CallOverrides): Promise<string>;

  "compress(bytes[])"(
    encodedTxs: BytesLike[],
    overrides?: CallOverrides
  ): Promise<string>;

  decode(
    encodedTx: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    txType: BigNumber;
    fromIndex: BigNumber;
    toIndex: BigNumber;
    amount: BigNumber;
    fee: BigNumber;
    nonce: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
  }>;

  "decode(bytes)"(
    encodedTx: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    txType: BigNumber;
    fromIndex: BigNumber;
    toIndex: BigNumber;
    amount: BigNumber;
    fee: BigNumber;
    nonce: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
  }>;

  decompress(
    txs: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    {
      fromIndex: BigNumber;
      toIndex: BigNumber;
      amount: BigNumber;
      fee: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }[]
  >;

  "decompress(bytes)"(
    txs: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    {
      fromIndex: BigNumber;
      toIndex: BigNumber;
      amount: BigNumber;
      fee: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
    }[]
  >;

  encode(
    _tx: {
      txType: BigNumberish;
      fromIndex: BigNumberish;
      toIndex: BigNumberish;
      amount: BigNumberish;
      fee: BigNumberish;
      nonce: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  "encode(tuple)"(
    _tx: {
      txType: BigNumberish;
      fromIndex: BigNumberish;
      toIndex: BigNumberish;
      amount: BigNumberish;
      fee: BigNumberish;
      nonce: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  process(
    stateRoot: BytesLike,
    encodedTx: BytesLike,
    tokenID: BigNumberish,
    from: {
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      };
      witness: BytesLike[];
    },
    to: {
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      };
      witness: BytesLike[];
    },
    overrides?: CallOverrides
  ): Promise<{
    newRoot: string;
    result: number;
    0: string;
    1: number;
  }>;

  "process(bytes32,bytes,uint256,tuple,tuple)"(
    stateRoot: BytesLike,
    encodedTx: BytesLike,
    tokenID: BigNumberish,
    from: {
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      };
      witness: BytesLike[];
    },
    to: {
      state: {
        pubkeyID: BigNumberish;
        tokenID: BigNumberish;
        balance: BigNumberish;
        nonce: BigNumberish;
      };
      witness: BytesLike[];
    },
    overrides?: CallOverrides
  ): Promise<{
    newRoot: string;
    result: number;
    0: string;
    1: number;
  }>;

  signBytes(encodedTx: BytesLike, overrides?: CallOverrides): Promise<string>;

  "signBytes(bytes)"(
    encodedTx: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  validate(
    encodedTx: BytesLike,
    signature: BigNumberish[],
    pubkey: BigNumberish[],
    domain: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "validate(bytes,uint256[2],uint256[4],bytes32)"(
    encodedTx: BytesLike,
    signature: BigNumberish[],
    pubkey: BigNumberish[],
    domain: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  validateAndApply(
    senderEncoded: BytesLike,
    receiverEncoded: BytesLike,
    encodedTx: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    newSender: string;
    newReceiver: string;
    result: number;
    0: string;
    1: string;
    2: number;
  }>;

  "validateAndApply(bytes,bytes,bytes)"(
    senderEncoded: BytesLike,
    receiverEncoded: BytesLike,
    encodedTx: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    newSender: string;
    newReceiver: string;
    result: number;
    0: string;
    1: string;
    2: number;
  }>;

  callStatic: {
    checkSignature(
      signature: BigNumberish[],
      proof: {
        states: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        }[];
        stateWitnesses: BytesLike[][];
        pubkeys: BigNumberish[][];
        pubkeyWitnesses: BytesLike[][];
      },
      stateRoot: BytesLike,
      accountRoot: BytesLike,
      domain: BytesLike,
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    "checkSignature(uint256[2],tuple,bytes32,bytes32,bytes32,bytes)"(
      signature: BigNumberish[],
      proof: {
        states: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        }[];
        stateWitnesses: BytesLike[][];
        pubkeys: BigNumberish[][];
        pubkeyWitnesses: BytesLike[][];
      },
      stateRoot: BytesLike,
      accountRoot: BytesLike,
      domain: BytesLike,
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    compress(
      encodedTxs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    "compress(bytes[])"(
      encodedTxs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<string>;

    decode(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      txType: BigNumber;
      fromIndex: BigNumber;
      toIndex: BigNumber;
      amount: BigNumber;
      fee: BigNumber;
      nonce: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
    }>;

    "decode(bytes)"(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      txType: BigNumber;
      fromIndex: BigNumber;
      toIndex: BigNumber;
      amount: BigNumber;
      fee: BigNumber;
      nonce: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
    }>;

    decompress(
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      {
        fromIndex: BigNumber;
        toIndex: BigNumber;
        amount: BigNumber;
        fee: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
      }[]
    >;

    "decompress(bytes)"(
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      {
        fromIndex: BigNumber;
        toIndex: BigNumber;
        amount: BigNumber;
        fee: BigNumber;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
      }[]
    >;

    encode(
      _tx: {
        txType: BigNumberish;
        fromIndex: BigNumberish;
        toIndex: BigNumberish;
        amount: BigNumberish;
        fee: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "encode(tuple)"(
      _tx: {
        txType: BigNumberish;
        fromIndex: BigNumberish;
        toIndex: BigNumberish;
        amount: BigNumberish;
        fee: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    process(
      stateRoot: BytesLike,
      encodedTx: BytesLike,
      tokenID: BigNumberish,
      from: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      to: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<{
      newRoot: string;
      result: number;
      0: string;
      1: number;
    }>;

    "process(bytes32,bytes,uint256,tuple,tuple)"(
      stateRoot: BytesLike,
      encodedTx: BytesLike,
      tokenID: BigNumberish,
      from: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      to: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<{
      newRoot: string;
      result: number;
      0: string;
      1: number;
    }>;

    signBytes(encodedTx: BytesLike, overrides?: CallOverrides): Promise<string>;

    "signBytes(bytes)"(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    validate(
      encodedTx: BytesLike,
      signature: BigNumberish[],
      pubkey: BigNumberish[],
      domain: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "validate(bytes,uint256[2],uint256[4],bytes32)"(
      encodedTx: BytesLike,
      signature: BigNumberish[],
      pubkey: BigNumberish[],
      domain: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    validateAndApply(
      senderEncoded: BytesLike,
      receiverEncoded: BytesLike,
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      newSender: string;
      newReceiver: string;
      result: number;
      0: string;
      1: string;
      2: number;
    }>;

    "validateAndApply(bytes,bytes,bytes)"(
      senderEncoded: BytesLike,
      receiverEncoded: BytesLike,
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      newSender: string;
      newReceiver: string;
      result: number;
      0: string;
      1: string;
      2: number;
    }>;
  };

  filters: {};

  estimateGas: {
    checkSignature(
      signature: BigNumberish[],
      proof: {
        states: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        }[];
        stateWitnesses: BytesLike[][];
        pubkeys: BigNumberish[][];
        pubkeyWitnesses: BytesLike[][];
      },
      stateRoot: BytesLike,
      accountRoot: BytesLike,
      domain: BytesLike,
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkSignature(uint256[2],tuple,bytes32,bytes32,bytes32,bytes)"(
      signature: BigNumberish[],
      proof: {
        states: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        }[];
        stateWitnesses: BytesLike[][];
        pubkeys: BigNumberish[][];
        pubkeyWitnesses: BytesLike[][];
      },
      stateRoot: BytesLike,
      accountRoot: BytesLike,
      domain: BytesLike,
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    compress(
      encodedTxs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "compress(bytes[])"(
      encodedTxs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decode(encodedTx: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "decode(bytes)"(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decompress(txs: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "decompress(bytes)"(
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    encode(
      _tx: {
        txType: BigNumberish;
        fromIndex: BigNumberish;
        toIndex: BigNumberish;
        amount: BigNumberish;
        fee: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "encode(tuple)"(
      _tx: {
        txType: BigNumberish;
        fromIndex: BigNumberish;
        toIndex: BigNumberish;
        amount: BigNumberish;
        fee: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    process(
      stateRoot: BytesLike,
      encodedTx: BytesLike,
      tokenID: BigNumberish,
      from: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      to: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "process(bytes32,bytes,uint256,tuple,tuple)"(
      stateRoot: BytesLike,
      encodedTx: BytesLike,
      tokenID: BigNumberish,
      from: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      to: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    signBytes(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "signBytes(bytes)"(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validate(
      encodedTx: BytesLike,
      signature: BigNumberish[],
      pubkey: BigNumberish[],
      domain: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validate(bytes,uint256[2],uint256[4],bytes32)"(
      encodedTx: BytesLike,
      signature: BigNumberish[],
      pubkey: BigNumberish[],
      domain: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateAndApply(
      senderEncoded: BytesLike,
      receiverEncoded: BytesLike,
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "validateAndApply(bytes,bytes,bytes)"(
      senderEncoded: BytesLike,
      receiverEncoded: BytesLike,
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkSignature(
      signature: BigNumberish[],
      proof: {
        states: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        }[];
        stateWitnesses: BytesLike[][];
        pubkeys: BigNumberish[][];
        pubkeyWitnesses: BytesLike[][];
      },
      stateRoot: BytesLike,
      accountRoot: BytesLike,
      domain: BytesLike,
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkSignature(uint256[2],tuple,bytes32,bytes32,bytes32,bytes)"(
      signature: BigNumberish[],
      proof: {
        states: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        }[];
        stateWitnesses: BytesLike[][];
        pubkeys: BigNumberish[][];
        pubkeyWitnesses: BytesLike[][];
      },
      stateRoot: BytesLike,
      accountRoot: BytesLike,
      domain: BytesLike,
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compress(
      encodedTxs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "compress(bytes[])"(
      encodedTxs: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decode(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "decode(bytes)"(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decompress(
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "decompress(bytes)"(
      txs: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encode(
      _tx: {
        txType: BigNumberish;
        fromIndex: BigNumberish;
        toIndex: BigNumberish;
        amount: BigNumberish;
        fee: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "encode(tuple)"(
      _tx: {
        txType: BigNumberish;
        fromIndex: BigNumberish;
        toIndex: BigNumberish;
        amount: BigNumberish;
        fee: BigNumberish;
        nonce: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    process(
      stateRoot: BytesLike,
      encodedTx: BytesLike,
      tokenID: BigNumberish,
      from: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      to: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "process(bytes32,bytes,uint256,tuple,tuple)"(
      stateRoot: BytesLike,
      encodedTx: BytesLike,
      tokenID: BigNumberish,
      from: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      to: {
        state: {
          pubkeyID: BigNumberish;
          tokenID: BigNumberish;
          balance: BigNumberish;
          nonce: BigNumberish;
        };
        witness: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    signBytes(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "signBytes(bytes)"(
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validate(
      encodedTx: BytesLike,
      signature: BigNumberish[],
      pubkey: BigNumberish[],
      domain: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validate(bytes,uint256[2],uint256[4],bytes32)"(
      encodedTx: BytesLike,
      signature: BigNumberish[],
      pubkey: BigNumberish[],
      domain: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateAndApply(
      senderEncoded: BytesLike,
      receiverEncoded: BytesLike,
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "validateAndApply(bytes,bytes,bytes)"(
      senderEncoded: BytesLike,
      receiverEncoded: BytesLike,
      encodedTx: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
