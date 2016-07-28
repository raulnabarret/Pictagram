var yo = require('yo-yo')
var landing = require('../landing')

var signinForm = yo `<div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="pictagram">Pictagram</h1>
                                    <form action="" class="signup-form">
                                        <div class="section">
                                            <a href="" class="btn btn-fb hide-on-small-only">Inicia sesión con Facebook</a>
                                            <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="text" name="username" placeholder="Username">
                                            <input type="password" name="password" placeholder="Password">
                                            <button class="btn btn-signup waves-effect waves-light" type="submit">Sign In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    Don't have an account?
                                    <a href="/signup">Sign Up</a>
                                </div>
                            </div>
                        </div>`

module.exports = landing(signinForm)