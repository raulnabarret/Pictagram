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

app.get('/api/pictures', function(req, res) {

	var pictures = [
			{
			'user': {
				username: 'raulnabarret',
				avatar: 'https://pbs.twimg.com/profile_images/755066211621179392/IWpe9VDE.jpg'
			},
			'url': 'https://pbs.twimg.com/profile_images/755066211621179392/IWpe9VDE.jpg',
			'likes': 0,
			'liked': false,
			'createdAt': new Date().getTime()
		},
		{
			'user': {
				username: 'raulnabarret',
				avatar: 'https://pbs.twimg.com/profile_images/755066211621179392/IWpe9VDE.jpg'
			},
			'url': 'https://pbs.twimg.com/profile_images/755066211621179392/IWpe9VDE.jpg',
			'likes': 2,
			'liked': true,
			'createdAt': new Date().getTime()
		}
	]

	setTimeout(function() {
		res.send(pictures)
	}, 2000);

})

app.listen(8080, function (err) {
	if (err) return console.log('Error'), process.exit(1)

	console.log('Listening on Port 8080')
})
