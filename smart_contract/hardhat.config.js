// https://eth-goerli.alchemyapi.io/v2/Jvp9FvaXmB5eIa2NJbUNlva_efbdDpMb

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url:'https://eth-goerli.alchemyapi.io/v2/Jvp9FvaXmB5eIa2NJbUNlva_efbdDpMb',
      accounts: [ '5925bede0644d973fb55d8a5e7fa94584c405879a433d65dd82fb5f4755647a3' ]

    }
  }
}