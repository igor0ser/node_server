var http = require('http');
var config = require('./modules/config');
var favicon = require('./modules/favicon');
var lastImg = require('./modules/lastImg');
var form = require('./modules/form');
var uploadImg = require('./modules/uploadImg');
var secretImg = require('./modules/secretImg');
var imgList = require('./modules/imgList');
var loadedImgs = require('./modules/loadedImgs');

var server = http.createServer((req, res) => {
	var url = '/' + req.url.split('?')[0].split('/')[1];
	console.log('url = ' + url);


	switch (url){
		case '/':
			lastImg(req, res);
			break;
		case '/favicon.ico':
			favicon(req, res);
			break;
		case '/post':
			form(req, res);
			break;
		case '/upload':
			uploadImg(req, res);
			break;
		case '/secret':
			secretImg(req, res);
			break;
		case '/list':
			imgList(req, res);
			break;
		case '/img_download':
			loadedImgs(req, res);
			break;
		default:
			console.log('default');
			res.writeHead(404);
			res.end();
			break;
	}
});

server.listen(config.PORT);
