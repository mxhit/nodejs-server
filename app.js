const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<iframe src="https://giphy.com/embed/Nx0rz3jtxtEre" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');
}).listen(8080);