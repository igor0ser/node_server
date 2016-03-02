var template = require('./template');
var fs = require('fs');

function form(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(template.form);
}

module.exports = form;