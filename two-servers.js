
// import http package to use for server creation
var http = require("http");

// good listening port
var goodPort = 7000;
// good listening port
var badPort = 7500;

function goodVibes(request, response) {

	response.end("Great Job!  You are the best developer around!!");
}

function badVibes(response, response) {

	response.end("You Stink at Development!  You should be a dishwasher instead!");
}

var goodServer = http.createServer(goodVibes);
var badServer = http.createServer(badVibes);

goodServer.listen(goodPort, function() {

	console.log("Good Server listening at: http://localhost:%s", goodPort);
});

badServer.listen(badPort, function() {

	console.log("Bad Server listening at: http://localhost:%s", badPort);
});



