const { readFileSync, writeFileSync } = require('fs');
console.log('Start task');
const first = readFileSync('./contents/first.txt', 'utf-8');
const secondFile = readFileSync('./contents/second.txt', 'utf-8');

console.log(first, secondFile);


const writeFirst = writeFileSync(
    './contents/result-sync.txt',
    '\nHere is the Change:' + first + " " + secondFile,
    { flag: 'a' }
)
console.log('Done with Task');
console.log('Starting New Task');