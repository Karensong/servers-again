var http = require('http');

var PORT = 7000;
var PORTS = 7500;


function handleRequest(request, response) {
	response.end("It works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("You are bad! Server listening on localhost:" + PORT);
})

var server = http.createServer(handleRequest);

server.listen(PORTS, function() {
	console.log("You are good! Server listening on localhost:" + PORTS);
})

