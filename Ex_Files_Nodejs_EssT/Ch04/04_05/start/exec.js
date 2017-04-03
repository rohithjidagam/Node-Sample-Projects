var exec = require('child_process').exec;

/*exec("open http://www.linkedin.com");

exec("open -a Terminal ."); */

exec("git version", function(err, stdout){
	if(err){
		throw err;
	} 
	console.log("Git version finished");
	console.log(stdout);
});