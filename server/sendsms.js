const Nexmo = require('nexmo');

const nexmo = new Nexmo({
	apiKey: '758148e8',
	apiSecret: 'niIL9iufJ8H7dfNW',
});

const from = "FAS for WKU";
const to = "+251909372772";
const text = "Hi from Node JS";

var result = nexmo.message.sendSms(from, to, text); 

console.log(result);