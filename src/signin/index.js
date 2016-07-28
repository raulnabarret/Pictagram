var $ = require('jquery')
var page = require('page')
var template = require('./template')


page('/signin', function(ctx, next) {
        
    var $main = $('#main-container')
    $main.html(template)

})
