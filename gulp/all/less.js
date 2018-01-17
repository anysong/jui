var gulp = require('gulp');
var less = require('gulp-less');
var notify = require('gulp-notify');

gulp.task('all-less',function(){
	gulp.src('styles/*.less')
	.pipe(less())
	.on('error', notify.onError({
		'message': 'Error: <%= error.message %>'
	}))
	.pipe(gulp.dest('styles'));
})