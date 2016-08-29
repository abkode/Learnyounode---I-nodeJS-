var path = require('path');
var module = require('./06_module');

var dir = process.argv[2];
var ext = process.argv[3];

var callback = (err, files) => {
    if (err) throw err;
    files.forEach(function (file) {
        console.log(file);
    })
}

module(dir, ext, callback);