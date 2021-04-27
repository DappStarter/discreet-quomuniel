require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remind concert hunt hill fortune squirrel'; 
let testAccounts = [
"0x920687aafb565813b62fbf2189a5eacd77e4b019053acca84ded9d525690914d",
"0xee2623b9b1c635323168de1ce54333f4047ea0ae3a71d52c951d1a96aaf1be8e",
"0x404f3fb32376ee8e536a44074c3538c498853755f4753e3ae0c58e8608beaf8d",
"0x7ca48e4f151bc541c75ea9ab27409b60aac18c7898edfcdb9369d2c851efee84",
"0x457d877348314676249249a09846acd6f9fe6347611fcd4418d8b6205231df67",
"0xaf64762fe4beb287c548d2f378b7beaa9c69c51ded59d82478294300e84d6b1b",
"0xfccb4fef74307421d9b60dfd44e002a7c154b819a098cc0cc2323512f185a1fa",
"0x56dd8cb52bd9e0c9e2d47eba4d4b382995fca54d0829795315890b0f410c8b24",
"0x1f7565e54f9ab011ba52bdffbcd5f17478d2387396a778dda7e55ab461677e2d",
"0xe82766c0220d839dfba5ae7d9986abafbe686122b4b3cba53d07d1b1280c2ea9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
