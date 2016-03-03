var fs = require('fs');
var path = require('path');
var config = require('./../helpers/config');
var fs2 = require('./../helpers/fs2');

var mimeTypes = {
	'html': 'text/html',
	'jpeg': 'image/jpeg',
	'jpg': 'image/jpeg',
	'png': 'image/png',
	'js': 'text/javascript',
	'css': 'text/css'
};

function getLastImage() {
	console.log(fs2.fileExists(config.LOG_FILE));
	if (!fs2.fileExists(config.LOG_FILE)) {return config.START_IMG;}
	return new Buffer(fs.readFileSync(config.LOG_FILE)).toString();
}

function lastImg(req, res){
	console.log('last');
	var filename = getLastImage();
	var mimeType = mimeTypes[path.extname(filename).split('.')[1]];
	res.writeHead(200, {'Content-Type': mimeType});
	var fileStream = fs.createReadStream(filename);
	fileStream.pipe(res);
}

module.exports = lastImg;