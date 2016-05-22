var clgulp = require('clgulp')
var gulp = clgulp(require('gulp'))
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var exec = clgulp.exec
var util = clgulp.util

gulp.task('default', function () {
  gulp.src('clanim.js')
    .pipe(concat('clanim-min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'))
})

gulp.task('tag', ['default', 'lint'], function (cb) {
  var version = require('./package.json').version
  var tag = 'v' + version
  util.log('Tagging as: ' + util.colors.cyan(tag))
  exec([
    'git add package.json clanim-min.js',
    'git commit -m "Prepare release"',
    'git tag -a ' + tag + ' -m "Version ' + version + '"',
    'git push origin master --tags',
    'npm publish'
  ], cb)
})
