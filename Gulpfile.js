var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')

gulp.task('styles', function() {
    
	gulp.src('index.scss')			//Source
	  .pipe(sass())					//Función o método: Sass
	  .pipe(rename('app.css'))		//Función o método: Rename
	  .pipe(gulp.dest('public')) 	//Destination

})

gulp.task('default', ['styles'])
