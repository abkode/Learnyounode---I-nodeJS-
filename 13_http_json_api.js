
const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

function formatTime(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

function fomatUnix(date) {
    return {
        unixtime: date.getTime()
    };
}

function processRequest(path, date) {
    var result = {};
    if (path === "/api/parsetime") {
        result = formatTime(date);
    } else if (path === "/api/unixtime") {
        result = fomatUnix(date);
    }
    return result;
}

var server = http.createServer(function (request, result) {
    if (request.method != 'GET') return result.end('Invalid GET request.\n');

    var url_info = url.parse(request.url, true);
    var date = new Date(url_info.query.iso);
    var data = processRequest(url_info.pathname, date);

    if (data) {
        result.writeHead(200, {'Content-Type': 'application/json'});
        result.end(JSON.stringify(data));
    } else {
        result.writeHead(404);
        result.end();
    }
});

server.listen(port);

