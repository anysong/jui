var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

gulp.task('ctrl-concat', function(){
	gulp.src('scripts/controllers/**/*.js')
	.pipe(concat('controllers.js'))
	.on('onError',notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('tar/'));
})

gulp.task('dir-concat', function(){
	gulp.src('scripts/directives/**/*.js')
	.pipe(concat('directives.js'))
	.on('onError',notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('tar/'));
})

gulp.task('less-concat', function(){
	gulp.src('styles/*.css')
	.pipe(concat('styles.css'))
	.on('onError',notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest('tar/'));
})