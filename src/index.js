var page = require('page')
var $ = require('jquery')
var yo = require('yo-yo')
var empty = require('empty')

$(document).ready(function() {

    var $main = $('#main-container')

    page('/', function(ctx, next) {
    	$('#main-container').html('Hola')
    })

    page('/signup', function(ctx, next) {

        var el = yo 
        `        
        <div class="container">
            <div class="row">
                <div class="col s10 push-s1">
                    <div class="row">
                        <div class="col m5 hide-on-small-only">
                            <img class="signup-image" src="iphone.png" alt="">
                        </div>
                        <div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="pictagram">Pictagram</h1>
                                    <form action="" class="signup-form">
                                        <h2>Sign up now!</h2>
                                        <div class="section">
                                            <a href="" class="btn btn-fb hide-on-small-only">Inicia sesión con Facebook</a>
                                            <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="email" name="email" placeholder="E-mail">
                                            <input type="text" name="name" placeholder="Name">
                                            <input type="text" name="username" placeholder="Username">
                                            <input type="password" name="password" placeholder="Password">
                                            <button class="btn btn-signup waves-effect waves-light" type="submit">Sign up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    Already have an account?
                                    <a href="/signin">Sign In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>	
		`
		empty($main.append(el))
    })

    page()

})
