//build-in modules
const os = require('os')

//Info about current user
const user = os.userInfo();
// console.log(user);


//Method returns up time of the system in seconds

console.log('The System Uptime is ' + (os.uptime() / 60) / 60) + ' Seconds';


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);
