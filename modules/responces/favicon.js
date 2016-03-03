var fs = require('fs');

function favicon(req, res){
	var filename = 'favicon.ico';
	res.writeHead(200, {'Content-Type': 'image/x-icon'});
	var fileStream = fs.createReadStream(filename);
	fileStream.pipe(res);
}

module.exports = favicon;