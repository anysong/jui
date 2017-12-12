var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function(){
	watch("./styles/main.less", function(){
		gulp.start('less-main');
	})
})