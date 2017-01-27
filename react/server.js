var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Within the eight paths');
  console.log('To your own enlightenment —');
  console.log('One\’s right livelihood.');
  console.log('Listening at http://%s:%s', host, port);
});


