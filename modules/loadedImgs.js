var fs = require('fs');
var path = require('path');
var config = require('./config');
var fs2 = require('./fs2');

var mimeTypes = {
	'html': 'text/html',
	'jpeg': 'image/jpeg',
	'jpg': 'image/jpeg',
	'png': 'image/png',
	'js': 'text/javascript',
	'css': 'text/css'
};

function loadedImgs(req, res){
	console.log('images');
	var filename = config.IMG_FOLDER + '/' +req.url.split('?')[0].split('/')[2];
	var mimeType = mimeTypes[path.extname(filename).split('.')[1]];
	res.writeHead(200, {'Content-Type': mimeType});
	if (!fs2.fileExists(filename) || !fs2.folderExists(config.IMG_FOLDER)) {
		res.end();
	} else {
		var fileStream = fs.createReadStream(filename);
		fileStream.pipe(res);
	}

}

module.exports = loadedImgs;