var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function(){
	watch("./styles/main.less", function(){
		gulp.start('less-main');
	})
	watch("./styles/table.less", function(){
		gulp.start('less-table');
	})
	watch("./styles/bubble.less", function(){
		gulp.start('less-bubble');
	})
})