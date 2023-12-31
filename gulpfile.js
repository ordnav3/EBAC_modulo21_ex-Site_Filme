const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch')

function imgemin () {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function styles () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./dist/styles'));
}


exports.default = gulp.parallel(imgemin, styles, )

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}