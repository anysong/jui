const gulp = require('gulp');
const less = require('gulp-less');
const notify = require('gulp-notify');

gulp.task('table-less', function(){
	return gulp.src('./styles/table.less')
	.pipe(less()).on('error',
		notify.onError({
			'message': 'Error: <%= error.message %>'
		}))
	.pipe(gulp.dest('./styles'));
});