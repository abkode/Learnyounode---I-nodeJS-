
const http = require('http');

http.get(process.argv[2], result => {
    var all_data = '';
    result.setEncoding('utf8');
    result.on('data',  data => {
        all_data += data;
    });
    result.on('error',  err => {
        console.error(err);
    });
    result.on('end', function () {
        console.log(all_data.length);
        console.log(all_data);
    });
});