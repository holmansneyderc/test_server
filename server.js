var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/bin/index.html'));
});

app.listen(8080,'200.69.103.101',function(){
	 console.log('hola mundo ');
})
