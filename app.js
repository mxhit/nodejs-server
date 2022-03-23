const http = require('http');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
    fs.readFile('./public/index.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Error: File Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(port, (err) => {
    if (err) {
        console.error('Something went wrong');
    } else {
        console.log(`Listening on port ${port}`);
    }
});