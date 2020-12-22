const BlockchainVote = artifacts.require("BlockchainVote");

module.exports = function(deployer) {
  deployer.deploy(BlockchainVote);
};
