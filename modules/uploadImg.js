var fs = require("fs");
var multiparty = require('multiparty');
var config = require('./config');
var template = require('./template');
var fs2 = require('./fs2');
var path = require('path');

function uploadImg(req, res) {
	var form = new multiparty.Form();
	form.parse(req, function(err, fields, files) {
		fs2.mkDirIfNotExits(config.IMG_FOLDER);


		var oldPath = files.upload[0].path;
		var newPath = config.IMG_FOLDER + '/' + files.upload[0].originalFilename;
		if (fs2.fileExists(newPath)){
			var ext = path.extname(newPath);
			newPath = config.IMG_FOLDER + '/'+ path.basename(newPath, ext) + '(' + new Date().getTime().toString().slice(7) + ')' + ext;
		}
		saveLastPath(newPath);
		var readStream = fs.createReadStream(oldPath);
		var writeStream = fs.createWriteStream(newPath);
		readStream.pipe(writeStream);
		res.writeHead(200, {'content-type': 'text/html'});
		res.end(template.uploadSuccess);
	});
}

function saveLastPath(path){
	fs.writeFileSync(config.LOG_FILE, path);
}

var fs = require('fs');



module.exports = uploadImg;