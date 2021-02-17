/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Signer} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import {Transfer} from "./Transfer";

export class TransferFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Transfer> {
    return super.deploy(overrides || {}) as Promise<Transfer>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transfer {
    return super.attach(address) as Transfer;
  }
  connect(signer: Signer): TransferFactory {
    return super.connect(signer) as TransferFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Transfer {
    return new Contract(address, _abi, signerOrProvider) as Transfer;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256[2]",
        name: "signature",
        type: "uint256[2]"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubkeyID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "tokenID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
              }
            ],
            internalType: "struct Types.UserState[]",
            name: "states",
            type: "tuple[]"
          },
          {
            internalType: "bytes32[][]",
            name: "stateWitnesses",
            type: "bytes32[][]"
          },
          {
            internalType: "uint256[4][]",
            name: "pubkeys",
            type: "uint256[4][]"
          },
          {
            internalType: "bytes32[][]",
            name: "pubkeyWitnesses",
            type: "bytes32[][]"
          }
        ],
        internalType: "struct Types.SignatureProof",
        name: "proof",
        type: "tuple"
      },
      {
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "accountRoot",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "domain",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      }
    ],
    name: "checkSignature",
    outputs: [
      {
        internalType: "enum Types.Result",
        name: "",
        type: "uint8"
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
        internalType: "bytes32",
        name: "stateRoot",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "maxTxSize",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "feeReceiver",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "txs",
        type: "bytes"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "pubkeyID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "tokenID",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "balance",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256"
              }
            ],
            internalType: "struct Types.UserState",
            name: "state",
            type: "tuple"
          },
          {
            internalType: "bytes32[]",
            name: "witness",
            type: "bytes32[]"
          }
        ],
        internalType: "struct Types.StateMerkleProof[]",
        name: "proofs",
        type: "tuple[]"
      }
    ],
    name: "processTransferCommit",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      },
      {
        internalType: "enum Types.Result",
        name: "result",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061318f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063729ba7f01461003b5780639293149214610064575b600080fd5b61004e6100493660046128d9565b610085565b60405161005b9190612f3b565b60405180910390f35b6100776100723660046129b4565b6100a2565b60405161005b929190612f20565b60006100958787878787876101e8565b90505b9695505050505050565b6000806100ae84610434565b156100be575085905060086101de565b60006100c98561044c565b9050868111156100e05787600992509250506101de565b60008090506000856000815181106100f457fe5b60200260200101516000015160200151905061010e612388565b60005b848110156101ad57610129898263ffffffff61046016565b91506101678c83858b856002028151811061014057fe5b60200260200101518c866002026001018151811061015a57fe5b60200260200101516104d4565b909c509550600086600a81111561017a57fe5b1461018d57508a95506101de9350505050565b60608201516101a390859063ffffffff61053116565b9350600101610111565b506101d18b8a84868b89600202815181106101c457fe5b602002602001015161055d565b909b508b96509450505050505b9550959350505050565b6000806101f48361044c565b905060608160405190808252806020026020018201604052801561023257816020015b61021f6123b0565b8152602001906001900390816102175790505b50905060005b828110156103e857610248612388565b610258868363ffffffff61046016565b90506102a78961027e8c60000151858151811061027157fe5b602002602001015161060b565b8051906020012083600001518d60200151868151811061029a57fe5b602002602001015161064a565b6102cc5760405162461bcd60e51b81526004016102c390612f6a565b60405180910390fd5b61033a888b6040015184815181106102e057fe5b60200260200101516040516020016102f89190612e32565b604051602081830303815290604052805190602001208c60000151858151811061031e57fe5b6020026020010151600001518d60600151868151811061029a57fe5b6103565760405162461bcd60e51b81526004016102c390612fda565b60008a60000151838151811061036857fe5b602002602001015160600151116103915760405162461bcd60e51b81526004016102c390612f9a565b60606103bb8260018d6000015186815181106103a957fe5b60200260200101516060015103610662565b90506103c788826106a7565b8484815181106103d357fe5b60209081029190910101525050600101610238565b506000806103fb8b8b6040015185610766565b925090508161041157600a945050505050610098565b80610423576005945050505050610098565b5060009a9950505050505050505050565b6000600c82518161044157fe5b06151590505b919050565b6000600c82518161045957fe5b0492915050565b610468612388565b506004600c8281028401918201516008830151600a80850151948401516040805160808101825263ffffffff9586168152939094166020840152600f86861c8116830a610fff97881602948401949094529384901c90921690910a919092160260608201525b92915050565b6000806104f18787600001518789604001518a6060015189610b03565b9092509050600081600a81111561050457fe5b1461050e576101de565b6105238287602001518789604001518761055d565b909890975095505050505050565b6000828201838110156105565760405162461bcd60e51b81526004016102c390612f7a565b9392505050565b60008061058387610571856000015161060b565b8051906020012088866020015161064a565b61059f5760405162461bcd60e51b81526004016102c390612ffa565b6105a7612388565b60006105b887878760000151610bb6565b9092509050600081600a8111156105cb57fe5b146105dd576000935091506101de9050565b6105fb6105e98361060b565b80519060200120898760200151610c27565b9960009950975050505050505050565b606081600001518260200151836040015184606001516040516020016106349493929190612e53565b6040516020818303038152906040529050919050565b600084610658858585610c27565b1495945050505050565b6060600183600001518460200151848660400151876060015160405160200161069096959493929190612e9b565b604051602081830303815290604052905092915050565b6106af6123b0565b6106b76123b0565b6106c18484610cd2565b90506106cb6123b0565b6106dc8260005b6020020151610da7565b90506106e66123b0565b6106f18360016106d2565b90506106fb6123ce565b825181526020808401518282015282516040808401919091529083015160608301526000908460808460066107d05a03fa905080801561073a5761073c565bfe5b508061075a5760405162461bcd60e51b81526004016102c390612f5a565b50919695505050505050565b815160009081908061078a5760405162461bcd60e51b81526004016102c390612fba565b835181146107aa5760405162461bcd60e51b81526004016102c390612f8a565b60008160010160060290506060816040519080825280602002602001820160405280156107e1578160200160208202803883390190505b5090508760006020020151816000815181106107f957fe5b602090810291909101015287600160200201518160018151811061081957fe5b6020026020010181815250507f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28160028151811061085357fe5b6020026020010181815250507f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed8160038151811061088d57fe5b6020026020010181815250507f275dc4a288d1afb3cbb1ac09187524c7db36395df7be3b99e673b13a075a65ec816004815181106108c757fe5b6020026020010181815250507f1d9befcd05a5323e6da4d435f3b617cdb3af83285c2df711ef39c01571827f9d8160058151811061090157fe5b602090810291909101015260005b83811015610ab05786818151811061092357fe5b602002602001015160006002811061093757fe5b602002015182826006026006018151811061094e57fe5b60200260200101818152505086818151811061096657fe5b602002602001015160016002811061097a57fe5b602002015182826006026007018151811061099157fe5b6020026020010181815250508781815181106109a957fe5b60200260200101516001600481106109bd57fe5b60200201518282600602600801815181106109d457fe5b6020026020010181815250508781815181106109ec57fe5b6020026020010151600060048110610a0057fe5b6020020151828260060260090181518110610a1757fe5b602002602001018181525050878181518110610a2f57fe5b6020026020010151600360048110610a4357fe5b60200201518282600602600a0181518110610a5a57fe5b602002602001018181525050878181518110610a7257fe5b6020026020010151600260048110610a8657fe5b60200201518282600602600b0181518110610a9d57fe5b602090810291909101015260010161090f565b50610ab96123ec565b6000610ac485611123565b90506020826020860260208601600885fa955085610aed57600080965096505050505050610afb565b505115159450600193505050505b935093915050565b600080610b2988610b17856000015161060b565b8051906020012089866020015161064a565b610b455760405162461bcd60e51b81526004016102c390612faa565b610b4d612388565b6000610b5f8888888860000151611134565b9092509050600081600a811115610b7257fe5b14610b8457600093509150610bab9050565b610ba2610b908361060b565b805190602001208a8760200151610c27565b93506000925050505b965096945050505050565b610bbe612388565b600084836020015114610bd657508190506004610afb565b60405180608001604052808460000151815260200184602001518152602001610c0c86866040015161053190919063ffffffff16565b81526060850151602090910152915060009050935093915050565b600083815b8351811015610cc957600185821c16610c825781848281518110610c4c57fe5b6020026020010151604051602001610c65929190612f05565b604051602081830303815290604052805190602001209150610cc1565b838181518110610c8e57fe5b602002602001015182604051602001610ca8929190612f05565b6040516020818303038152906040528051906020012091505b600101610c2c565b50949350505050565b610cda6123b0565b6060610ce68484611202565b9050600080600080601885016001600160c01b0381511693506030860190506001600160c01b03815116945060008051602061312d8339815191528560008051602061312d833981519152600160c01b87090892506048860190506001600160c01b0381511693506060860190506001600160c01b03815116945060008051602061312d8339815191528560008051602061312d833981519152600160c01b8709086040805180820190915293845260208401525090979650505050505050565b610daf6123b0565b60008051602061312d8339815191528210610ddc5760405162461bcd60e51b81526004016102c390612fca565b816000610de88261146a565b915050600060008051602061312d83398151915280610e0357fe5b838409905060008051602061312d833981519152600482089050600060008051602061312d83398151915277b3c4d79d41a91759a9e4c7e359b6b89eaec68e62effffffd85099050600060008051602061312d8339815191528383099050610e6a81611493565b905060008051602061312d833981519152828309915060008051602061312d833981519152818309915060008051602061312d833981519152828609915060008051602061312d8339815191528260008051602061312d833981519152037759e26bcea0d48bacd4f263f1acdb5c4f5763473177fffffe08945060008051602061312d833981519152858609915060008051602061312d833981519152858309915060008051602061312d8339815191526003830891506000610f2c8361146a565b90935090508015610f6f5784610f50578260008051602061312d8339815191520392505b5050604080518082019091529384526020840152509091506104479050565b60008051602061312d8339815191526001870860008051602061312d83398151915203955060008051602061312d83398151915280610faa57fe5b868709925060008051602061312d833981519152868409925060008051602061312d833981519152600384089250610fe18361146a565b909350905080156110205784610f505750506040805180820190915293845260008051602061312d833981519152036020840152509091506104479050565b60008051602061312d833981519152848509955060008051602061312d833981519152868709955060008051602061312d833981519152828709955060008051602061312d833981519152828709955060008051602061312d83398151915260018708955060008051602061312d833981519152868709925060008051602061312d833981519152868409925060008051602061312d8339815191526003840892506110cb8361146a565b9093509050806110ed5760405162461bcd60e51b81526004016102c390612fea565b84611106578260008051602061312d8339815191520392505b505060408051808201909152938452602084015250909392505050565b600181016184d00261afc801919050565b61113c612388565b60008461114e575081905060016111f9565b6000611160868663ffffffff61053116565b9050808460400151101561117b5783600292509250506111f9565b868460200151146111935783600392509250506111f9565b61119b612388565b604051806080016040528086600001518152602001866020015181526020016111d184886040015161149e90919063ffffffff16565b81526020016111ee6001886060015161053190919063ffffffff16565b905293506000925050505b94509492505050565b80516040805160648301808252601f1960838501168201602001909252606092918391908015611239576020820181803883390190505b506040805160608082526080820190925291925090816020820181803883390190505090506060820160005b8481101561127f5760208188018101518383015201611265565b50830160008153600101606081536001016000815360018101879052602101602081535060006002836040516112b59190612e47565b602060405180830381855afa1580156112d2573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052506112f5919081019061298e565b905060006042945084845281602085015260016040850153604184018890526020606185015360028460405161132b9190612e47565b602060405180830381855afa158015611348573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525061136b919081019061298e565b9050806020840152808218806020860152600260408601536041850189905260206061860153506002846040516113a29190612e47565b602060405180830381855afa1580156113bf573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052506113e2919081019061298e565b9050806040840152808218806020860152600360408601536041850189905260206061860153506002846040516114199190612e47565b602060405180830381855afa158015611436573d6000803e3d6000fd5b5050506040513d601f19601f82011682018060405250611459919081019061298e565b606084015250909695505050505050565b600080611476836114e0565b91508260008051602061312d833981519152838409149050915091565b60006104ce82611c15565b600061055683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061235c565b600060008051602061312d8339815191528083840991508083830981838209828283098385830984848309858484098684850997508684840987858409945087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a099a9950505050505050505050565b600060008051602061312d8339815191528083840991508083830981838209828283098385830984848309858484098684850997508684840987858409945087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087848a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087818a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087828a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087878a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087898a09985087838a09985087898a09985087898a09985087898a09985087898a09985087858a09985087898a09985087898a09985087898a09985087868a09985087898a09985087898a099850878a8a09985087898a09985087898a09985087898a09985087898a09985087898a09985087898a09985087868a099a9950505050505050505050565b600081848411156123805760405162461bcd60e51b81526004016102c39190612f49565b505050900390565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180604001604052806002906020820280388339509192915050565b60405180608001604052806004906020820280388339509192915050565b60405180602001604052806001906020820280388339509192915050565b600082601f83011261241b57600080fd5b813561242e61242982613030565b61300a565b81815260209384019390925082018360005b8381101561246c578135860161245688826124e8565b8452506020928301929190910190600101612440565b5050505092915050565b600082601f83011261248757600080fd5b813561249561242982613030565b915081818352602084019350602081019050838560808402820111156124ba57600080fd5b60005b8381101561246c57816124d08882612688565b845250602090920191608091909101906001016124bd565b600082601f8301126124f957600080fd5b813561250761242982613030565b9150818183526020840193506020810190508385602084028201111561252c57600080fd5b60005b8381101561246c578161254288826126e9565b845250602092830192919091019060010161252f565b600082601f83011261256957600080fd5b813561257761242982613030565b81815260209384019390925082018360005b8381101561246c578135860161259f8882612818565b8452506020928301929190910190600101612589565b600082601f8301126125c657600080fd5b81356125d461242982613030565b915081818352602084019350602081019050838560808402820111156125f957600080fd5b60005b8381101561246c578161260f8882612876565b845250602090920191608091909101906001016125fc565b600082601f83011261263857600080fd5b600261264661242982613050565b9150818385602084028201111561265c57600080fd5b60005b8381101561246c578161267288826126e9565b845250602092830192919091019060010161265f565b600082601f83011261269957600080fd5b60046126a761242982613050565b915081838560208402820111156126bd57600080fd5b60005b8381101561246c57816126d388826126e9565b84525060209283019291909101906001016126c0565b80356104ce81613118565b80516104ce81613118565b600082601f83011261271057600080fd5b813561271e6124298261306d565b9150808252602083016020830185838301111561273a57600080fd5b6127458382846130c5565b50505092915050565b60006080828403121561276057600080fd5b61276a608061300a565b905081356001600160401b0381111561278257600080fd5b61278e848285016125b5565b82525060208201356001600160401b038111156127aa57600080fd5b6127b68482850161240a565b60208301525060408201356001600160401b038111156127d557600080fd5b6127e184828501612476565b60408301525060608201356001600160401b0381111561280057600080fd5b61280c8482850161240a565b60608301525092915050565b600060a0828403121561282a57600080fd5b612834604061300a565b905060006128428484612876565b82525060808201356001600160401b0381111561285e57600080fd5b61286a848285016124e8565b60208301525092915050565b60006080828403121561288857600080fd5b612892608061300a565b905060006128a084846126e9565b82525060206128b1848483016126e9565b60208301525060406128c5848285016126e9565b604083015250606061280c848285016126e9565b60008060008060008060e087890312156128f257600080fd5b60006128fe8989612627565b96505060408701356001600160401b0381111561291a57600080fd5b61292689828a0161274e565b955050606061293789828a016126e9565b945050608061294889828a016126e9565b93505060a061295989828a016126e9565b92505060c08701356001600160401b0381111561297557600080fd5b61298189828a016126ff565b9150509295509295509295565b6000602082840312156129a057600080fd5b60006129ac84846126f4565b949350505050565b600080600080600060a086880312156129cc57600080fd5b60006129d888886126e9565b95505060206129e9888289016126e9565b94505060406129fa888289016126e9565b93505060608601356001600160401b03811115612a1657600080fd5b612a22888289016126ff565b92505060808601356001600160401b03811115612a3e57600080fd5b612a4a88828901612558565b9150509295509295909350565b6000612a638383612abf565b505060200190565b612a7481613097565b612a7e8184610447565b9250612a8982613094565b8060005b83811015612ab7578151612aa18782612a57565b9650612aac836130a1565b925050600101612a8d565b505050505050565b612ac881613094565b82525050565b6000612ad98261309d565b612ae38185610447565b9350612af38185602086016130d1565b9290920192915050565b612ac8816130ba565b6000612b118261309d565b612b1b81856130a7565b9350612b2b8185602086016130d1565b612b3481613101565b9093019392505050565b6000612b4b6017836130a7565b7f424c533a20626e206164642063616c6c206661696c6564000000000000000000815260200192915050565b6000612b846024836130a7565b7f41757468656e7469636974793a20737461746520696e636c7573696f6e20736981526333b732b960e11b602082015260400192915050565b6000612bca601b836130a7565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b6000612c036035836130a7565b7f424c533a206e756d626572206f66207075626c6963206b65797320616e64206d815274195cdcd859d95cc81b5d5cdd08189948195c5d585b605a1b602082015260400192915050565b6000612c5a6018836130a7565b7f41757468656e7469636974793a207a65726f206e6f6e63650000000000000000815260200192915050565b6000612c936021836130a7565b7f5472616e736974696f6e3a2053656e64657220646f6573206e6f7420657869738152601d60fa1b602082015260400192915050565b6000612cd66021836130a7565b7f424c533a206e756d626572206f66207075626c6963206b6579206973207a65728152606f60f81b602082015260400192915050565b6000612d196023836130a7565b7f6d6170546f506f696e7446543a20696e76616c6964206669656c6420656c656d815262195b9d60ea1b602082015260400192915050565b6000612d5e6025836130a7565b7f41757468656e7469636974793a206163636f756e7420646f6573206e6f742065815264786973747360d81b602082015260400192915050565b6000612da56022836130a7565b7f424c533a20626164206674206d617070696e6720696d706c656d656e7461746981526137b760f11b602082015260400192915050565b6000612de96023836130a7565b7f5472616e736974696f6e3a20726563656976657220646f6573206e6f742065788152621a5cdd60ea1b602082015260400192915050565b612ac8612e2d82613094565b613094565b6000612e3e8284612a6b565b50608001919050565b60006105568284612ace565b6000612e5f8287612e21565b602082019150612e6f8286612e21565b602082019150612e7f8285612e21565b602082019150612e8f8284612e21565b50602001949350505050565b6000612ea78289612e21565b602082019150612eb78288612e21565b602082019150612ec78287612e21565b602082019150612ed78286612e21565b602082019150612ee78285612e21565b602082019150612ef78284612e21565b506020019695505050505050565b60408101612f138285612abf565b6105566020830184612abf565b60408101612f2e8285612abf565b6105566020830184612afd565b602081016104ce8284612afd565b602080825281016105568184612b06565b602080825281016104ce81612b3e565b602080825281016104ce81612b77565b602080825281016104ce81612bbd565b602080825281016104ce81612bf6565b602080825281016104ce81612c4d565b602080825281016104ce81612c86565b602080825281016104ce81612cc9565b602080825281016104ce81612d0c565b602080825281016104ce81612d51565b602080825281016104ce81612d98565b602080825281016104ce81612ddc565b6040518181016001600160401b038111828210171561302857600080fd5b604052919050565b60006001600160401b0382111561304657600080fd5b5060209081020190565b60006001600160401b0382111561306657600080fd5b5060200290565b60006001600160401b0382111561308357600080fd5b506020601f91909101601f19160190565b90565b50600490565b5190565b60200190565b90815260200190565b806104478161310b565b60006104ce826130b0565b82818337506000910152565b60005b838110156130ec5781810151838201526020016130d4565b838111156130fb576000848401525b50505050565b601f01601f191690565b600b811061311557fe5b50565b61312181613094565b811461311557600080fdfe30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47a365627a7a723158205ea67625fc7f5df51fd6d55c57cd17a182b8ff8d2c09f31ee6f8b9ef1fddd3406c6578706572696d656e74616cf564736f6c634300050f0040";