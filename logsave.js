/*
public: 1CHNJAAxs95H1UCsqxFgRbueeugyfAma3A
private: ***********************************


console.log('LOSAVE 1.0');
*/


const datapay = require('datapay')
const privateKey = "**************************";

var args = process.argv.slice(2);
console.log('SAVING LINE TO CHAIN: '+args[0]);


datapay.send({
  data: ["0x6d02", args[0]],
  pay: { key: privateKey }
});

