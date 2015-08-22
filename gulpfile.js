var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('build-js', function() {
    gulp.src('clanim.js')
        .pipe(concat('clanim-min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['build-js']);
