var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.send('Hello world!')
})

app.listen(8080, function (err) {
	if (err) return console.log('Error'), process.exit(1)

	console.log('Listening on Port 8080')
})