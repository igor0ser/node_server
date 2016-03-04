var fs = require('fs');
var path = require('path');
var config = require('./../helpers/config');
var fs2 = require('./../helpers/fs2');
var mime = require('./../helpers/mime');


function getLastImage() {
	if (!fs2.fileExists(config.LOG_FILE)) {
		return config.START_IMG;
	}

	var newFilePath = new Buffer(fs.readFileSync(config.LOG_FILE)).toString();

	if (!fs2.fileExists(newFilePath)) {
		return config.START_IMG;
	}

	return newFilePath;
}

function lastImg(req, res){
	var filename = getLastImage();
	var mimeType = mime(path.extname(filename));
	res.writeHead(200, {'Content-Type': mimeType});
	var fileStream = fs.createReadStream(filename);
	fileStream.pipe(res);
}

module.exports = lastImg;