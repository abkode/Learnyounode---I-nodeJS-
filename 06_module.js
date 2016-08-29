var fs = require('fs');
var path = require('path');

function get_sorted_files(dir, extension, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err);
        
        files = files.filter( file => { 
        	if(path.extname(file) === '.' + extension) return true;
        })
        return callback(null, files);
    })
}
module.exports = get_sorted_files;