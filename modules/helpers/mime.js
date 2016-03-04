var mimeTypes = {
	'html': 'text/html',
	'jpeg': 'image/jpeg',
	'jpg': 'image/jpeg',
	'png': 'image/png',
	'js': 'text/javascript',
	'css': 'text/css'
};

function mime(ext) {
	var res = mimeTypes[ext.split('.')[1]];
	return res ? res : 'text/plain';
}

module.exports = mime;