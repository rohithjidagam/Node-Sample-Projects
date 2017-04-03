var fs = require('fs');

if(fs.existsSync("lib")){
	console.log("dir Exists..");
} else{

fs.mkdir("lib", function(err) {
	if(err){
		console.log(err);
	} else{
		console.log("Dir Created..");
	}

});

}