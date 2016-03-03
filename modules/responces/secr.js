var templates = require('./../helpers/templates');

function secr(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(templates.secr);
}

module.exports = secr;