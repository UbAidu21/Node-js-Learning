// Modules- Encasulated Code(only share minimu,)
//CommonJS-Every File is Module(by default)

const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flav.js')
require('./7-mind-granad.js')

console.log(data);
console.log(names);
console.log();
sayHi(names.firstName + names.lastName)
sayHi(names.lastName)
