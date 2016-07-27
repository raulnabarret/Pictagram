var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('styles', function() {
    
	gulp.src('index.scss')			//Source
	  .pipe(sass())					//Función o método: Sass
	  .pipe(rename('app.css'))		//Función o método: Rename
	  .pipe(gulp.dest('public')) 	//Destination

})

gulp.task('assets', function() {

	gulp.src('assets/*')
	  .pipe(gulp.dest('public'))
})

gulp.task('scripts', function() {

	browserify('./src/index.js')
		.transform(babel)
		.bundle()
		.pipe(source('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('public'))

})

gulp.task('default', ['styles', 'assets', 'scripts'])
