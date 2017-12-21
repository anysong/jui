const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('table-watch',['table-concat','table-less'], function(){
	watch('./scripts/controllers/table/*.js',function(){
		gulp.start('table-concat');
	});
	watch(['./styles/table.less', './styles/table/*.less'],function(){
		gulp.start('table-less');
	});
});