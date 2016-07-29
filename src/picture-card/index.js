var yo = require('yo-yo')

module.exports = function pictureCard(pic) {

	var el
	
	function render(pic) {
		return yo`<div class="card ${pic.liked ? 'liked' : ''}">
    	<div class="card-image">
      		<img class="activator" src="${pic.url}">
    	</div>
	    <div class="card-content">
    	  	<a href="/user/${pic.user.username}" class="card-title">
				<img src="${pic.user.avatar}" class="avatar"/>       
				<span class="username">${pic.user.username}</span>
      		</a>
			<small class="time right">Hace 1 día</small>
			<p>
				<a href="#" class="left" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
				<a href="#" class="left" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
				<span class="left likes">${pic.likes} me gusta</span>
			</p>
		</div>
    </div>`
	}	

    function like(liked) {
    	pic.liked = liked
    	pic.likes += liked ? 1 : -1
    	var newEl = render(pic)
    	yo.update(el, newEl)
    	return false
    } 

    el = render(pic)
    return el
}