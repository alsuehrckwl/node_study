var fs = require('fs');

var data = fs.readFileSync('2-blockingtest.txt');

console.log(data.toString());
console.log("Program has ended");