var templates = require('./../helpers/templates');

function home(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(templates.home);
}

module.exports = home;