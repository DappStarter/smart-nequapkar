require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe street crawl shift promote idea force frame genre'; 
let testAccounts = [
"0x9d80c73025299de68b0ce044a9eadd7277e060fd5e0b5f9f285872a0514e549d",
"0x2be7f2dd7f85216a337f5f2c0202a13c72d28892a623695bf4d813e3c76bac26",
"0x2b3f52f7c4ce253a104127fa67527dc2e18a3fd8e05dd144e3ae929c3027a95f",
"0xf9c7239be5535e185dd59b02084007771b8b978a8031207c7a571b8c62c70c41",
"0xb8d1dd927af80219c60f3259fcbdc2d03aa01c938e24d6b20f90cdce10be41d7",
"0x0b4a8641108de4b4c8f2d05da4a1d813f7e36e672b23057fda8e60ba2abf6141",
"0x57e638ecb6e99d10f000fbe81dc140b4bfdcafa57b0fa864547f1042f0e9349e",
"0x3d79919fa5c71560fc347da4f96e93dbb178d5a038831690c4d7fc5e4c1fe9b8",
"0xa7bdf1a4ccd71b0666f72af65b734bb84a22e58f441a5c12bc65b32ed3b0897f",
"0x462b500db9c2216d2db6724da603ed53f9946c15057eb9dd23cb42418cc41c28"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
