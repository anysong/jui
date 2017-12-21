const gulp = require('gulp');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
var tar = './tar/bubble/';

gulp.task('bubble-concat-controllers',function(){
	return gulp.src(['./scripts/controllers/bubble/*.js'])
	.pipe(concat('bubble-controllers.js'))
	.on("onError",notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest(tar));
});

gulp.task('bubble-concat-directives',function(){
	return gulp.src(['./scripts/directives/bubble/*.js'])
	.pipe(concat('bubble-directives.js'))
	.on("onError",notify.onError("Error: <%= error.message %>"))
	.pipe(gulp.dest(tar));
});

gulp.task('bubble-concat', ['bubble-concat-controllers','bubble-concat-directives'],function(){
	
});
