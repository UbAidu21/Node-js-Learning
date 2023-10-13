const { writeFileSync } = require('fs')

for (let index = 0; index < 10000; index++) {
    writeFileSync('./contents/big.txt', `Hello Habibi ${index}\n`, { flag: 'a' })
}
