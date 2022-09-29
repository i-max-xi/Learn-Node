const { readFile, readFileSync } = require('fs');

// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt);


//refactor to callback
readFile('./hello.txt','utf8', (err, txt) => {
    console.log(txt);
})

console.log("This doesnt print until readFileSync is done");