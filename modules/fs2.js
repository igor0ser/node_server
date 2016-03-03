var fs = require('fs');

function fileExists(filePath){
	try{
		return fs.statSync(filePath).isFile();
	}
	catch (err){
		return false;
	}
}

function folderExists(folderPath){
	try{
		return !fs.statSync(folderPath).isFile();
	}
	catch (err){
		return false;
	}
}

function mkDirIfNotExits(folderPath){

	console.log('folderExists =' + folderExists(folderPath));
	if (!folderExists(folderPath)) {
		fs.mkdirSync(folderPath)
	}
	console.log('and again!'); 
	console.log('folderExists =' + folderExists(folderPath));
}

var fs2 = {
	fileExists: fileExists,
	folderExists: folderExists,
	mkDirIfNotExits: mkDirIfNotExits
}

module.exports = fs2;