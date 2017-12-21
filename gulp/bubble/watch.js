const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('bubble-watch',['bubble-concat','bubble-less'], function(){
	watch('./scripts/controllers/bubble/*.js',function(){
		gulp.start('bubble-concat-controllers');
	});
	watch('./scripts/directives/bubble/*.js',function(){
		gulp.start('bubble-concat-directives');
	});
	watch(['./styles/bubble.less', './styles/bubble/*.less'],function(){
		gulp.start('bubble-less');
	});
});