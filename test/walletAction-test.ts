import { expect, assert } from "chai";

import { expectEvent, expectRevert } from "@openzeppelin/test-helpers";

import Fixture from "./helpers/Fixture";
import TokenHelper from "./helpers/TokenHelper";

import { aggregate } from "./lib/hubble-bls/src/signer";
import { BigNumber } from "ethers";

describe('WalletActions', async function () {
  let fx: Fixture;
  let th: TokenHelper;
  beforeEach(async function() {
    fx = await Fixture.create();
  });

  it('should register new wallet', async function () {
    let blsSigner = fx.blsSigners[0];  
    let walletAddress = await fx.createBLSWallet(blsSigner);

    let blsWallet = fx.BLSWallet.attach(walletAddress);
    expect(await blsWallet.publicKeyHash())
      .to.equal(Fixture.blsKeyHash(blsSigner));

    // Check revert when adding same wallet twice
    await expectRevert.unspecified(fx.createBLSWallet(blsSigner));

  });

  it("should process individual calls", async function() {
    th = new TokenHelper(fx);
    let blsWalletAddresses = await th.walletTokenSetup();

    // check each wallet has start amount
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let walletBalance = await th.testToken.balanceOf(blsWalletAddresses[i]);
      expect(walletBalance).to.equal(TokenHelper.userStartAmount);
    }

    console.log("Send between wallets...");
    // bls transfer each wallet's balance to first wallet
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      await th.transferFrom(
        BigNumber.from(0),
        await fx.BLSWallet.attach(blsWalletAddresses[i]).nonce(),
        fx.blsSigners[i],
        blsWalletAddresses[0],
        TokenHelper.userStartAmount
      );
    }

    // check first wallet full and others empty
    let totalAmount = TokenHelper.userStartAmount.mul(blsWalletAddresses.length);
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let walletBalance = await th.testToken.balanceOf(blsWalletAddresses[i]);
      expect(walletBalance).to.equal(i==0?totalAmount:0);
    }
  });

  it("should process multiple transfers", async function() {
    th = new TokenHelper(fx);
    let blsWalletAddresses = await th.walletTokenSetup();

    // encode transfer of start amount to first wallet
    let encodedFunction = th.testToken.interface.encodeFunctionData(
      "transfer",
      [blsWalletAddresses[0], TokenHelper.userStartAmount.toString()]
    );

    let signatures: any[] = new Array(blsWalletAddresses.length);
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let dataToSign = fx.dataPayload(
        await fx.BLSWallet.attach(blsWalletAddresses[i]).nonce(),
        th.testToken.address,
        encodedFunction
      );
      signatures[i] = fx.blsSigners[i].sign(dataToSign);
    }

    // each bls wallet to sign same transfer data
    // let signatures = blsSigners.map(b => b.sign(dataToSign));
    let aggSignature = aggregate(signatures);

    // can be called by any ecdsa wallet
    await(await fx.blsExpander.blsCallMultiSameContractFunctionParams(
      Array(signatures.length).fill(0),
      fx.blsSigners.map(Fixture.blsKeyHash),
      aggSignature,
      th.testToken.address,
      encodedFunction.substring(0,10),
      '0x'+encodedFunction.substr(10)
    )).wait();
    // let length = signatures.length;
    // await verificationGateway.blsCallMany(
    //   Array(length).fill(0),
    //   blsSigners.map(blsKeyHash), // corresponding bls signers
    //   aggSignature,
    //   Array(length).fill(testToken.address), // call to same contract
    //   Array(length).fill(encodedFunction.substring(0,10)), // same function
    //   Array(length).fill('0x'+encodedFunction.substr(10)) // same params
    // );

    let totalAmount = TokenHelper.userStartAmount.mul(blsWalletAddresses.length);
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let walletBalance = await th.testToken.balanceOf(blsWalletAddresses[i]);
      expect(walletBalance).to.equal(i==0?totalAmount:0);
    }
  });

  it("should airdrop", async function() {
    let blsWalletAddresses = await fx.createBLSWallets();
    let testToken = await TokenHelper.deployTestToken();

    // send all to first address
    console.log("Send tokens to first bls wallet");
    let totalAmount = TokenHelper.userStartAmount.mul(blsWalletAddresses.length);
    await(await testToken.connect(fx.signers[0]).transfer(
      blsWalletAddresses[0],
      totalAmount
    )).wait();

    let signatures: any[] = new Array(blsWalletAddresses.length);
    let encodedParams: string[] = new Array(blsWalletAddresses.length);
    let nonce = await fx.BLSWallet.attach(blsWalletAddresses[0]).nonce();
    for (let i = 0; i<blsWalletAddresses.length; i++) {
      // encode transfer of start amount to each wallet
      let encodedFunction = testToken.interface.encodeFunctionData(
        "transfer",
        [blsWalletAddresses[i], TokenHelper.userStartAmount.toString()]
      );
      encodedParams[i] = '0x'+encodedFunction.substr(10);

      let dataToSign = fx.dataPayload(
        nonce++,
        testToken.address,
        encodedFunction
      );
      signatures[i] = fx.blsSigners[0].sign(dataToSign);
    }

    let aggSignature = aggregate(signatures);

    console.log("Airdrop");
    await(await fx.blsExpander.blsCallMultiSameCallerContractFunction(
      Array(signatures.length).fill(0),
      Fixture.blsKeyHash(fx.blsSigners[0]),
      aggSignature,
      testToken.address,
      testToken.interface.getSighash("transfer"),
      encodedParams
    )).wait();

    for (let i = 0; i<blsWalletAddresses.length; i++) {
      let walletBalance = await testToken.balanceOf(blsWalletAddresses[i]);
      expect(walletBalance).to.equal(TokenHelper.userStartAmount);
    }

  });

});
