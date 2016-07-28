var $ = require('jquery')
var page = require('page')
var template = require('./template')
var title = require('title')

page('/signin', function(ctx, next) {
    title('Pictagram - Sign In')        
    var $main = $('#main-container')
    $main.html(template)

})
