const gulp = require('gulp');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
var tar = './tar/table/';

gulp.task('table-concat',function(){
	return gulp.src(['./scripts/controllers/table/*.js'])
	.pipe(concat('table.js'))
	.on("onError",notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest(tar));
});