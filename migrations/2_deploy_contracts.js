const DEPLOYER = '0x627306090abaB3A6e1400e9345bC60c78a8BEf57';
// const Ownable = artifacts.require("Ownable");
const AwesomeTeamCoin = artifacts.require('AwesomeTeamCoin');

// NOTE: Use this file to easily deploy the contracts you're writing.
//   (but make sure to reset this file before committing
//    with `git checkout HEAD -- migrations/2_deploy_contracts.js`)

module.exports = (deployer) => {
  // deployer.deploy(Ownable);
  deployer.deploy(AwesomeTeamCoin, 10000, { from : DEPLOYER });
};
