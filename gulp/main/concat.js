const gulp = require('gulp');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
var tar = './tar/';

gulp.task('main-concat',function(){
	return gulp.src(['./scripts/controllers/MainCtrl.js'])
	.pipe(concat('main.js'))
	.on("onError",notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest(tar));
});