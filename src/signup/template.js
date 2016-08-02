var yo = require('yo-yo')
var landing = require('../landing')
var translate = require('../translate')

var signupForm = yo `<div class="col s12 m7">
                            <div class="row">
                                <div class="signup-box">
                                    <h1 class="pictagram">Pictagram</h1>
                                    <form action="" class="signup-form">
                                        <h2>${translate.message('signup.subheading')}</h2>
                                        <div class="section">
                                            <a href="" class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
                                            <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i>
                                                ${translate.message('signup.text')}
                                            </a>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="section">
                                            <input type="email" name="email" placeholder="${translate.message('email')}">
                                            <input type="text" name="name" placeholder="${translate.message('username')}">
                                            <input type="text" name="username" placeholder="${translate.message('fullname')}">
                                            <input type="password" name="password" placeholder="${translate.message('password')}">
                                            <button class="btn btn-signup waves-effect waves-light" type="submit">${translate.message('signup.call-to-action')}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="row">
                                <div class="login-box">
                                    ${translate.message('signup.have-account')}
                                    <a href="/signin">${translate.message('signin')}</a>
                                </div>
                            </div>
                        </div>`

module.exports = landing(signupForm)