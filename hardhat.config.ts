import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";

const {
  RINKEBY_PRIVATE_KEY,
  RINKEBY_RPC_URL,
  ETHERSCAN_API_KEY,
  COINMARKET_CAP_API_KEY,
  GOERLI_RPC_URL,
  GOERLI_PRIVATE_KEY,
  POLYGONSCAN_API_KEY,
  MUMBAI_PRIVATE_KEY,
  MUMBAI_RPC_URL,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL!,
      accounts: [RINKEBY_PRIVATE_KEY!],
      chainId: 4,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [GOERLI_PRIVATE_KEY!],
      chainId: 5,
    },
    polygonMumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [MUMBAI_PRIVATE_KEY!],
      chainId: 80001,
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: ETHERSCAN_API_KEY!,
      goerli: ETHERSCAN_API_KEY!,
      polygonMumbai: POLYGONSCAN_API_KEY!,
    },
  },
  gasReporter: {
    enabled: true,
    noColors: true,
    outputFile: "gas-report.txt",
    currency: "USD",
    coinmarketcap: COINMARKET_CAP_API_KEY,
  },
};

export default config;
