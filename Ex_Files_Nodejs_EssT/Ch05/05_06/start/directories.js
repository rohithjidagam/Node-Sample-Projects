var fs = require('fs');

/*fs.renameSync("./assets/logs", "./logs");

console.log("success"); 

fs.rmdir("./assets", function(err) {
	if(err){
		throw err;
	} 

	console.log("Asset Dir removed..");
}); */

fs.readdirSync("./logs").forEach(function(file){
	fs.unlinkSync("./logs/"+file);
});

fs.rmdir("./logs", function(err){
	if(err){
		throw err;
	} 

	console.log("Logs Dir removed..");

});