var yo = require('yo-yo')
var landing = require('../landing')

var signupForm = yo `<div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="pictagram">Pictagram</h1>
                                    <form action="" class="signup-form">
                                        <h2>Sign up now!</h2>
                                        <div class="section">
                                            <a href="" class="btn btn-fb hide-on-small-only">Inicia sesión con Facebook</a>
                                            <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i>
                                                Iniciar sesión
                                            </a>
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
                        </div>`

module.exports = landing(signupForm)