var $ = require('jquery')
var page = require('page')
var title = require('title')
var template = require('./template')
var request = require('superagent')
var header = require('../header')

var $main = $('#main-container')

page('/', header, loadPictures, function(ctx, next) {
	
	title('Pictagram - Home')

    $main.html(template(ctx.pictures))


})

function loadPictures(ctx, next) {
	request
		.get('/api/pictures')
		.end(function (err, res){
			if (err) return console.log(err)

			ctx.pictures = res.body
			next()
		})
}	