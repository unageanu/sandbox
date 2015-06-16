'use strict';

var gulp    = require('gulp');
var uglify  = require('gulp-uglify');
var webpack = require('gulp-webpack');
var config  = require('../config/webpack.js');

gulp.task('build', function () {
    return gulp.src(config.entry)
        .pipe(webpack(config))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"));
});
