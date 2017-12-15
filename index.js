var express = require('express')

var app = express()

app.get('/', function(req, res){
	res.send('Hello world')
})

var server = app.listen(5566, function(){
	var port = server.address().port
	console.log( 'server is listening at port: ' + port )
})
