var https = require('https');
var fs = require('fs');

var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/George_Washington",
	method: "GET"
};

var req = https.request(options, function (res) {
	
	var resBody = "";
	console.log("Response from Server started..");
	console.log(`Server Status: ${res.statusCode}`);
	console.log("Resposne Headers: %j", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk){
		console.log(chunk);
	});

	res.on("data", function(chunk){
		console.log(`--chunk-- ${chunk.length}`);
		resBody += chunk;
	});

	res.on("end", function(){
		fs.writeFile("gw.html", resBody, function(err){
			if(err){
				throw err;
			}
			console.log("File Downlaoded");
		});
	});
});

req.on("error", function(err){
	console.log(`problem with request: ${err.message}`);
});

req.end();