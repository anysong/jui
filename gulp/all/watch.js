var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('all-watch', ['all-less','ctrl-concat','dir-concat','less-concat'], function(){
	watch('scripts/controllers/**/*.js', function(){
		gulp.start('ctrl-concat');
	});
	watch('scripts/directives/**/*.js', function(){
		gulp.start('dir-concat');
	});
	watch('styles/**/*.less', function(){
		gulp.start('less-concat');
	});
});