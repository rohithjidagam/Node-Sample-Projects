var http = require('http');

var server = http.createServer(function (req, res) {
	
	res.writeHead(200, {"Content-Type": "text/html"});

	res.end("<h1>Hello World</h1>");
});

server.listen(3000);

console.log("Server listening on 3000...")