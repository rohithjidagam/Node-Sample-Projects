var fs = require('fs');

fs.renameSync("./lib/project-config.js", "./lib/config.json");

console.log("Renamed..");

fs.rename("./lib/notes.md","./notes.md", function(err) {
	if(err){
		throw err;
	} else{
		console.log("Moved..");
	}


});