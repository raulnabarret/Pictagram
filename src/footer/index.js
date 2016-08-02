var yo = require('yo-yo')
var $ = require('jquery')
var translate = require('../translate')

var el = yo`<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 m12 l3 center-align"><a href="#" data-activates="dropdown1" class="dropdown-button btn btn-flat">${translate.message('language')}</a>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#!" onclick=${lang.bind(null, 'en-US')}>${translate.message('english')}</a></li>
          <li><a href="#!" onclick=${lang.bind(null, 'es')}>${translate.message('spanish')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-align">© 2016 Pictagram</div>
    </div>
  </div>
</footer>`

function lang(locale) {
  localStorage.locale = locale
  location.reload()
}
 
document.body.appendChild(el)
