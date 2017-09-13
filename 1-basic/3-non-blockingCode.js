var fs = require('fs');

fs.readFile('2-blockingtest.txt', function(err, data) {
    if (err) return console.log(err);

    console.log(data.toString());
});

console.log('Program hs ended');