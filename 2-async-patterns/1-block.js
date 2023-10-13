const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Home Page</h1>')
    }
    if (req.url === '/about') {
        //BLOACKING CODE!!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(i + j);

            }

        }
        res.end('<h1>About Page</h1>')

    }

    res.end('Page Not Found')

})

server.listen(5000, () => {
    console.log('Server is Listening on Port 5000...');
})