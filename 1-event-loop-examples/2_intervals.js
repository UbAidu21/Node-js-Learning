
//Started Operating system process
console.log('First');
setTimeout(() => {
    console.log('Second');
}, 0);

console.log('Third');
//Complete and exited operating system process

setInterval(() => {
    console.log('Hello World');
}, 2000)
console.log('I will Executed First');