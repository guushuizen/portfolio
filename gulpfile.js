'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);