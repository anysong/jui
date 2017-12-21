const gulp = require('gulp');
const less = require('gulp-less');
const notify = require('gulp-notify');

gulp.task('bubble-less', function(){
	return gulp.src('./styles/bubble.less')
	.pipe(less()).on('error',
		notify.onError({
			'message': 'Error: <%= error.message %>'
		}))
	.pipe(gulp.dest('./styles'));
});