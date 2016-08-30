const http = require('http');
const map = require('through2-map');
const port = Number(process.argv[2]);

var server = http.createServer(function (request, result) {
    if (request.method != 'POST') return result.end('Invalid POST request.\n');
    request.pipe(map(function (data) {
        return data.toString().toUpperCase();
    })).pipe(result);
});

server.listen(port);