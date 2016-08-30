const http = require('http');
const fs = require('fs');
const fileToRead = process.argv[3];
const port = Number(process.argv[2]);

var server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})

    var fsStream = fs.createReadStream(fileToRead);
    fsStream.pipe(res);
});

server.listen(port);