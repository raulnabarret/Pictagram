var $ = require('jquery')
var page = require('page')
var title = require('title')
var template = require('./template')
var request = require('superagent')
var header = require('../header')
var axios = require('axios')

var $main = $('#main-container')

page('/', header, loadPicturesAxios, function(ctx, next) {
	
	title('Pictagram - Home')

    $main.html(template(ctx.pictures))


})

function loadPicturesAxios(ctx, next) {
	axios
		.get('/api/pictures')
		.then(function (res){

			ctx.pictures = res.data
			next()
		})
		.catch(function (err) {
			console.log(err)
		})
}	

// function loadPictures(ctx, next) {
// 	request
// 		.get('/api/pictures')
// 		.end(function (err, res){
// 			if (err) return console.log(err)

// 			ctx.pictures = res.body
// 			next()
// 		})
// }	