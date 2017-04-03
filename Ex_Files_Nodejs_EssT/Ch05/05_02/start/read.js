var fs = require('fs');

var path = require('path');

//var contents = fs.readFileSync("./lib/sayings.md", "UTF-8");

fs.readdir("./lib", function(err, files){
	if(err){
		throw err;
	}

	files.forEach(function(fileName){
		var file = path.join(__dirname, "lib", fileName);
		var stats = fs.statSync(file);
		if(stats.isFile() && fileName !== ".DS_Store"){
			fs.readFile(file, "UTF-8", function(err, data) {
				console.log(data);
			});

		}
	})
});
