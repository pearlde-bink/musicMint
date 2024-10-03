require('dotenv').config();

// require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-web3'); // to create no additional tasks
require('@nomicfoundation/hardhat-verify'); //to verify smart contract

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.27',
  networks: {
    // initialize each network with its endpoint
    mainnet: {
      url: process.env.MAINNET,
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: process.env.SEPOLIA,
      accounts: [process.env.PRIVATE_KEY],
    },
    // sepolia: {
    //   url: process.env.SEPOLIA,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
};
