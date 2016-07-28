var $ = require('jquery')
var page = require('page')


var $main = $('#main-container')

    page('/', function(ctx, next) {

        $main.html('Hola')
    
    })
	