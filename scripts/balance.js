require('dotenv').config();
require('@nomiclabs/hardhat-web3');

const address = process.env.WALLET;
const getBal = async (s) => {
  const bal = await web3.eth.getBalance(address);
  console.log(
    `Checking balance of address ${address}.\n Balance: ${bal} wei. \n This amounts to : ${web3.utils.fromWei(
      bal
    )} ETH.\n`
  );
};

// now get 0 wei cause not enough ETH on mainnet to get fund from Chainstack faucet
getBal();
