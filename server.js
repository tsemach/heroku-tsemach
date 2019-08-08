const http = require('http');

var server = http.createServer((req, res) => {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World");
});

let port = process.env.PORT;
server.listen(port);
