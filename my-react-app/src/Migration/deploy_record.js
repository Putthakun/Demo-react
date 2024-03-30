// Filename: migrations/2_deploy_contracts.js
const record = artifacts.require("record");

module.exports = function(deployer) {
  deployer.deploy(record
    );
};
