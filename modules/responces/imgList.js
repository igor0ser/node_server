var fs = require("fs");
var fs2 = require('./../helpers/fs2');
var config = require('./../helpers/config');
var templates = require('./../helpers/templates');

function imgList(req, res) {
	getFileNamesList();
	res.writeHead(200, {'content-type': 'text/html'});
	res.end(templates.imgList(getFileNamesList()));
}

function getFileNamesList(){
	fs2.mkDirIfNotExits(config.IMG_FOLDER);
	var files = fs.readdirSync(config.IMG_FOLDER);
	var list = '';
	if (files.length === 0 ) {
		return 'No images was downloaded yet.'
	}
	for (var i = 0; i < files.length; i++){
		list += '<li><a href="' + config.IMG_FOLDER + '/' + files[i] + '">' + files[i] + '</a></li>';
	}
	return list;
}


module.exports = imgList;