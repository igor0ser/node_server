var fs = require('fs');
var path = require('path');
var config = require('./../helpers/config');
var fs2 = require('./../helpers/fs2');
var mime = require('./../helpers/mime');


function loadedImgs(req, res){
	var filename = config.IMG_FOLDER + '/' +req.url.split('?')[0].split('/')[2];
	var mimeType = mime(path.extname(filename));
	res.writeHead(200, {'Content-Type': mimeType});
	if (!fs2.fileExists(filename) || !fs2.folderExists(config.IMG_FOLDER)) {
		res.end();
	} else {
		var fileStream = fs.createReadStream(filename);
		fileStream.pipe(res);
	}

}

module.exports = loadedImgs;