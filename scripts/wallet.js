require('dotenv').config();
require('@nomiclabs/hardhat-web3');

// axios library to send HTTP requests to the faucet
const axios = require('axios');

//create wallet and return address and private key
const createWallet = async () => {
  const wallet = web3.eth.accounts.create();
  return [wallet.address, wallet.privateKey];
};

// fund the wallet using the Chainstack faucet
const fundWallet = async (address, apiKey) => {
  const apiUrl = `https://api.chainstack.com/v1/faucet/${network.name}`;

  try {
    const response = await axios.post(
      apiUrl,
      { address },
      {
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    // console.log('error funding: ', error);
    // throw error;
  }
};

const main = async () => {
  try {
    // config for the faucet API call
    const apiKey = process.env.CHAINSTACK;
    // const apiKey = import.meta.env.CHAINSTACK;

    console.log('Attempting to generate new wallet... \n');
    const [address, privateKey] = await createWallet();

    console.log(`Created new wallet with address: ${address}\n`);
    console.log(`New private key: ${privateKey} === KEEP IT SAFE ===\n`);
    console.log(
      `Sending ${network.name} faucet request for address ${address}...\n`
    );
    const fundResponse = await fundWallet(address, apiKey);
    console.log(
      `Successfully funded ${address} on ${network.name} for ${fundResponse.amountSent}ETH.\n\nView transaction on Etherscan: ${fundResponse.transaction}\n`
    );
  } catch (err) {
    console.log('An error occured: ', err);
  }
};

main();
