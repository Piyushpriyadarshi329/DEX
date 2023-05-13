require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */



// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "4QYfjB1TRXrW314ckTHi8UEjNnGEzihu";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

module.exports = {
  solidity: "0.8.17",
  paths:{
  sources: "./contracts",
  artifacts: "./frontend/src/artifacts",
  cache: "./cache"
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/4QYfjB1TRXrW314ckTHi8UEjNnGEzihu`,
      accounts: ["8f493f893720ee123f4afca40764e164a3a1723db7513c59a203eca3884e7ac6"]
    }
  }
};
