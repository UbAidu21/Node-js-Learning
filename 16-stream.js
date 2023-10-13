const { createReadStream } = require('fs')

const stream = createReadStream('./contents/big.txt', { highWaterMark: 90000, encoding: 'utf-8' });

stream.on('data', (text) => {
    console.log(text);
})

