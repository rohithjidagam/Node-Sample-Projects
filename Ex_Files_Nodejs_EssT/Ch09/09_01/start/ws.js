var WebSockerServer = require("ws").Server;

var wss = new WebSockerServer({port: 3000});

wss.on("connection", function (ws) {
	ws.send("Welcome to cyber chat");
});