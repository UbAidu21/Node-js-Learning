const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == '/') {

        res.end('Welcome to Out Home Page');
    }
    if (req.url == '/about') {
        res.end('Here is Our History');
    }
    res.end(`
        <h1>Oops! <br> Eror 404</h1>
        <p>Sorry we Could'nt find your page</p>
    `)
})

server.listen(5000)