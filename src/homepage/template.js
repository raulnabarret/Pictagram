var yo = require('yo-yo')
var layout = require('../layout')
var picture = require('../picture-card')
var translate = require('../translate')
var $ = require('jquery')

module.exports = function(pictures) {
    var el = yo `
	<div class="container timeline">
		<div class="row">		
			<div class="col s12 m10 offset-m1 l8 offset-m2 center-align">	
				<form enctype="multipart/form-data" class="form-upload" id="formUpload">
					<div id="fileName" class="fileUpload btn btn-flat cyan">
						<span>
							<i class="fa fa-camera" aria-hidden="true"></i> ${translate.message('upload-picture')} 
						</span>
						<input name="picture" type="file" class="upload" id="file" onchange=${onchange} />
					</div>
					<button class="btn btn-flat cyan hide" id="btnUpload" type="submit">${translate.message('upload')}</button>
					<button class="btn btn-flat red hide" id="btnCancel" type="button" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>
				</form>	
			</div>
		</div>
		<div class="row">
			<div class="col s12 m10">
				${pictures.map(function (pic) {
					return picture(pic)
				})}
			</div>
		</div>
	</div>
`
	function toggleButtons () {
		$("#fileName").toggleClass('hide')
		$("#btnUpload").toggleClass('hide')
		$("#btnCancel").toggleClass('hide')
	}

	function cancel () {
		toggleButtons()
		document.getElementById("formUpload").reset()
	}

	function onchange () {
		toggleButtons()
	}	

    return layout(el)
}
