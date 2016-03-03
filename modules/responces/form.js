var templates = require('./../helpers/templates');

function form(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(templates.form);
}

module.exports = form;