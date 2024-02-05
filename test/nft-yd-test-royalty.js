const truffleAssert = require("truffle-assertions");
const web3 = require("web3");

const TheGreedyMachinesRoyalty = artifacts.require("TheGreedyMachinesRoyalty");

contract("NftYDRoyalty", (accounts) => {
  const owner = accounts[0];
  const userWhoWillBeNftRoyalty = accounts[1];

  // it("should have 1000000000 balance of gmt in the owner account", async () => {
  //   const gmtToken = await GoMiningToken.deployed();
  //   const gmtBalance = await gmtToken.balanceOf.call(owner);

  //   assert.equal(
  //     gmtBalance,
  //     BigInt("1000000000000000000000000000"),
  //     "1000000000000000000000000000 wasn't in the owner account"
  //   );
  // });
});
