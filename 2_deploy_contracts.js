const DStorage = artifacts.require("Dstorage");

module.exports = function(deployer) {
	deployer.deploy(Dstorage);
};
