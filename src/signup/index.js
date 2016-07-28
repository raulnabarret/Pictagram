var $ = require('jquery')
var page = require('page')
var template = require('./template')
var title = require('title')

    page('/signup', function(ctx, next) {
        title('Pictagram - Sign Up')
        var $main = $('#main-container')
        $main.html(template)

    })
