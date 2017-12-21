const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('main-watch',['main-concat','main-less'], function(){
	watch('./scripts/controllers/MainCtrl.js',function(){
		gulp.start('main-concat');
	});
	watch(['./styles/main.less'],function(){
		gulp.start('main-less');
	});
});