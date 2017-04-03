var http = require("http");
var dataFile = require("./data/inventory");

http.createServer(function (req, res) {

	if(req.url === "/"){
		res.writeHead(200,{"Content-Type": "text/json"});
		res.end(JSON.stringify(dataFile));
	} else if(req.url == "/instock"){
		listInStock(res);
	} else if(req.url == "/onorder"){
		listOnBackOrder(res);
	} else{
		res.writeHead(400,{"Content-Type": "text/plain"});
		res.end("data not found..");
	}
		
}).listen(3000);

console.log("Server listening on 3000...");

function listInStock(res){

	var inStock = dataFile.filter(function(item){
		return item.avail === "In stock";
	});

	res.end(JSON.stringify(inStock));

}

function listOnBackOrder(res){

	var onOrder = dataFile.filter(function(item){
		return item.avail === "On back order";
	});

	res.end(JSON.stringify(onOrder));

}

