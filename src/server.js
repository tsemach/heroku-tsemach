var express = require('express');
var app = express();

const basedir = __dirname + '/..';

app.use(express.static(basedir));

app.all('*', function (req, res) {
	console.log("got get call, path:", basedir + "/index.html");
	res.send("<h1>heroki works!</h1>");
	// res.status(200).sendFile(basedir + "/index.html");
})

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
