var http = require('http');
var favicon = require('./modules/responces/favicon');
var home = require('./modules/responces/home');
var lastImg = require('./modules/responces/lastImg');
var form = require('./modules/responces/form');
var uploadImg = require('./modules/responces/uploadImg');
var secr = require('./modules/responces/secr');
var secretImg = require('./modules/responces/secretImg');
var imgList = require('./modules/responces/imgList');
var loadedImgs = require('./modules/responces/loadedImgs');

var server = http.createServer((req, res) => {
	var url = '/' + req.url.split('?')[0].split('/')[1];
	console.log('url = ' + url);


	switch (url){
		case '/':
			home(req, res);
			break;
		case '/last':
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
		case '/secr':
			secr(req, res);
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

server.listen(3000);
