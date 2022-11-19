/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RPS, RPSInterface } from "../RPS";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_c1",
        type: "uint8",
      },
      {
        name: "_c2",
        type: "uint8",
      },
    ],
    name: "win",
    outputs: [
      {
        name: "w",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "j2Timeout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "stake",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "c2",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "c1Hash",
    outputs: [
      {
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_c2",
        type: "uint8",
      },
    ],
    name: "play",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "j2",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "lastAction",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_c1",
        type: "uint8",
      },
      {
        name: "_salt",
        type: "uint256",
      },
    ],
    name: "solve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "j1",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "j1Timeout",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "TIMEOUT",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_c1Hash",
        type: "bytes32",
      },
      {
        name: "_j2",
        type: "address",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "constructor",
  },
];
const _bytecode =
  "608060405261012c600555604051604080610c6e833981018060405281019080805190602001909291908051906020019092919050505034600481905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160028160001916905550426006819055505050610b8d806100e16000396000f3006080604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c4395b9146100bf578063294914a4146101145780633a4b66f11461012b57806348e257cb146101565780634d03e3d21461018f57806353a04b05146101c257806380985af9146101e557806389f71d531461023c578063a5ddec7c14610267578063c37597c6146102a1578063c8391142146102f8578063f56f48f21461030f575b600080fd5b3480156100cb57600080fd5b506100fa600480360381019080803560ff169060200190929190803560ff16906020019092919050505061033a565b604051808215151515815260200191505060405180910390f35b34801561012057600080fd5b50610129610403565b005b34801561013757600080fd5b506101406104ae565b6040518082815260200191505060405180910390f35b34801561016257600080fd5b5061016b6104b4565b6040518082600581111561017b57fe5b60ff16815260200191505060405180910390f35b34801561019b57600080fd5b506101a46104c7565b60405180826000191660001916815260200191505060405180910390f35b6101e3600480360381019080803560ff1690602001909291905050506104cd565b005b3480156101f157600080fd5b506101fa61059a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561024857600080fd5b506102516105c0565b6040518082815260200191505060405180910390f35b34801561027357600080fd5b5061029f600480360381019080803560ff169060200190929190803590602001909291905050506105c6565b005b3480156102ad57600080fd5b506102b6610a86565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561030457600080fd5b5061030d610aab565b005b34801561031b57600080fd5b50610324610b5b565b6040518082815260200191505060405180910390f35b600081600581111561034857fe5b83600581111561035457fe5b141561036357600090506103fd565b6000600581111561037057fe5b83600581111561037c57fe5b141561038b57600090506103fd565b600282600581111561039957fe5b8115156103a257fe5b0660028460058111156103b157fe5b8115156103ba57fe5b0614156103e1578160058111156103cd57fe5b8360058111156103d957fe5b1090506103fd565b8160058111156103ed57fe5b8360058111156103f957fe5b1190505b92915050565b6000600581111561041057fe5b600360009054906101000a900460ff16600581111561042b57fe5b14151561043757600080fd5b600554600654014211151561044b57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050506000600481905550565b60045481565b600360009054906101000a900460ff1681565b60025481565b600060058111156104da57fe5b600360009054906101000a900460ff1660058111156104f557fe5b14151561050157600080fd5b6004543414151561051157600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056d57600080fd5b80600360006101000a81548160ff0219169083600581111561058b57fe5b02179055504260068190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b600080600080600060058111156105d957fe5b600360009054906101000a900460ff1660058111156105f457fe5b1415151561066a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f6332206d6f7665206e756c6c000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f6d736773656e646572206e6f74206a310000000000000000000000000000000081525060200191505060405180910390fd5b6002546000191686866040518083600581111561074757fe5b60ff167f0100000000000000000000000000000000000000000000000000000000000000028152600101828152602001925050506040518091039020600019161415156107fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f633168617368206973206e6f74207468652073616d650000000000000000000081525060200191505060405180910390fd5b61081586600360009054906101000a900460ff1661033a565b156108de57601460045460020281151561082b57fe5b0493508360045460020203925073fb1aaf764369acf36bbbbfe887f68cabfdec695473ffffffffffffffffffffffffffffffffffffffff166108fc859081150290604051600060405180830381858888f19350505050506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f1935050505050610a76565b6108f7600360009054906101000a900460ff168761033a565b156109c157601460045460020281151561090d57fe5b0491508360045460020203905073fb1aaf764369acf36bbbbfe887f68cabfdec695473ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505050610a75565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050505b5b6000600481905550505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006005811115610ab857fe5b600360009054906101000a900460ff166005811115610ad357fe5b14151515610ae057600080fd5b6005546006540142111515610af457600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506000600481905550565b600554815600a165627a7a723058200cd1a4ed292164423fcf796df90c57597a81556e6e9a331becfcc242c6cc2c690029";

export class RPS__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _c1Hash: BytesLike,
    _j2: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<RPS> {
    return super.deploy(_c1Hash, _j2, overrides || {}) as Promise<RPS>;
  }
  getDeployTransaction(
    _c1Hash: BytesLike,
    _j2: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_c1Hash, _j2, overrides || {});
  }
  attach(address: string): RPS {
    return super.attach(address) as RPS;
  }
  connect(signer: Signer): RPS__factory {
    return super.connect(signer) as RPS__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RPSInterface {
    return new utils.Interface(_abi) as RPSInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RPS {
    return new Contract(address, _abi, signerOrProvider) as RPS;
  }
}
