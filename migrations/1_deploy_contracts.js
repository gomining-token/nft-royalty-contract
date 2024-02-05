const NftRoyalty = artifacts.require("NftRoyalty");

module.exports = async function (deployer, network) {
  if (network === "test") {
    await deployer.deploy(NftRoyalty, process.env.TEST_ROYALTY_ADDRESS);
  } else if (network === "goerli") {
    await deployer.deploy(NftRoyalty, process.env.GOERLI_ROYALTY_ADDRESS);
  } else if (network === "live") {
    await deployer.deploy(NftRoyalty, process.env.MAINNET_ROYALTY_ADDRESS);
  }
};
