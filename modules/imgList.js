var fs = require("fs");
var config = require('./config');
var template = require('./template');

function imgList(req, res) {
	getFileNamesList()
	res.writeHead(200, {'content-type': 'text/html'});
	res.end(template.imgList(getFileNamesList()));
}

function getFileNamesList(){
	var files = fs.readdirSync(config.IMF_FOLDER);
	var list = '';
	for (var i = 0; i < files.length; i++){
		list += '<li>' + files[i] + '</li>';
	}
	return list;
}


module.exports = imgList;