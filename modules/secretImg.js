var fs = require("fs");
var multiparty = require('multiparty');
var config = require('./config');
var template = require('./template');

function secretImg(req, res) {
	var querryArr = req.url.split('?')[1].split('=');
	console.log(querryArr);

	if (querryArr[0] === 'password' && querryArr[1] === config.PASSWORD){
		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		var fileStream = fs.createReadStream(config.SECRET_IMG);
		fileStream.pipe(res);
	} else {
		res.writeHead(403, {'Content-Type': 'text/html'});
		res.end(template.wrongPassword);
	}

}


module.exports = secretImg;