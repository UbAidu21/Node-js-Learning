const { readFile } = require('fs');
const { result } = require('lodash');

console.log('Started a First Task');
//CHECK FILE PATH!!!
readFile('./contents/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('Completed first task');
})

console.log('Started next Task');