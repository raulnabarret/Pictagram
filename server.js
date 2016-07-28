var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function (req, res) {
	res.render('index', { 
		'title': 'Pictagram - Home'
	})
})

app.get('/signup', function (req, res) {
	res.render('index', { 
		'title': 'Pictagram - Sign Up'
	})
})

app.get('/signup', function (req, res) {
	res.render('index', { 
		'title': 'Pictagram - Sign In'
	})
})

app.listen(8080, function (err) {
	if (err) return console.log('Error'), process.exit(1)

	console.log('Listening on Port 8080')
})
