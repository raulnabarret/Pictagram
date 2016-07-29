var $ = require('jquery')
var page = require('page')
var title = require('title')
var template = require('./template')


var $main = $('#main-container')

page('/', function(ctx, next) {
	
	title('Pictagram - Home')
    
	var pictures = [
		{
			'user': {
				username: 'raulnabarret',
				avatar: 'https://pbs.twimg.com/profile_images/755066211621179392/IWpe9VDE.jpg'
			},
			'url': 'https://pbs.twimg.com/profile_images/755066211621179392/IWpe9VDE.jpg',
			'likes': 2034,
			'liked': true,
			'createdAt': new Date()
		},
		{
			'user': {
				username: 'raulnabarret',
				avatar: 'https://pbs.twimg.com/profile_images/755066211621179392/IWpe9VDE.jpg'
			},
			'url': 'https://pbs.twimg.com/profile_images/755066211621179392/IWpe9VDE.jpg',
			'likes': 2034,
			'liked': true,
			'createdAt': new Date().setDate(new Date().getDate() - 10)
		}
	]

    $main.html(template(pictures))


})
	