require("@nomicfoundation/hardhat-toolbox");

/**
 * We extracted `URL`, `PRIVATE_KEY` as const variable to set value easily.
 * Set your private key and klaytn node's URL in here.
 */
const PRIVATE_KEY = '3d31f2f1c1de57e57c2830192cfab9032a88ce2ba4601dd307267bdf59be3edf';

/**
 * Aurora testnet config for testing deployments
 */
const AURORA_TESTNET_URL = `https://testnet.aurora.dev/`;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    aurora: {
      url: AURORA_TESTNET_URL,
      accounts: [PRIVATE_KEY] // @TODO: Uses the private key from the .env file
    },
  }
};
