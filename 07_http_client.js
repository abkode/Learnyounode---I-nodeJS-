const http = require('http');

http.get(process.argv[2], result => {
    result.setEncoding('utf8');
    
    result.on('data', data => {
        console.log(data);
    });

    result.on('error', err => {
        console.error(err);
    });

});
