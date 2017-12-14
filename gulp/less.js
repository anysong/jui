var gulp = require('gulp');
var less = require('gulp-less');
var autoPre = require('gulp-autoprefixer');
var notify = require('gulp-notify');

gulp.task('less-main', function(){
	return gulp.src('./styles/main.less')
			.pipe(less())
			.on("error", notify.onError({
                'message': 'Error:<%= error.message %>'
            }))
			.pipe(autoPre({
				'browsers': ['last 5 versions']
			}))
			.pipe(gulp.dest('./styles'));
});
gulp.task('less-table', function(){
	return gulp.src('./styles/table.less')
			.pipe(less())
			.on("error", notify.onError({
				'message': 'Error:<%= error.message %>'
			}))
			.pipe(autoPre({
				'browsers': ['last 5 versions']
			}))
			.pipe(gulp.dest('./styles'));
});