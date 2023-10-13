var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./contents/big.txt', 'utf-8')
    // res.end(text);

    const fileStream = fs.createReadStream('./contents/big.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
}).listen(5000)