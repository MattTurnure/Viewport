'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    notify      = require('gulp-notify'),
    del         = require('del'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(notify({message: 'HTML task complete'}));
});

gulp.task('styles', function () {
    var sassOptions = {
        defaultEncoding: 'UTF-8',
        lineNumbers: true,
        style: 'expanded',
        precision: 8
    };
    gulp.src('src/scss/main.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({message: 'Sass task complete'}));
});

gulp.task('scripts', function () {
    return gulp.src([
            'src/assets/js/main.js'
        ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({message: 'Scripts task complete'}));
});

gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

gulp.task('build', ['html', 'styles', 'scripts']);

gulp.task('default', ['build']);

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function () {

    browserSync({
        server: "./dist"
    });

    gulp.watch("src/**/*.html", ['html']);
    gulp.watch("src/assets/js/**/*.js", ['scripts']);
    gulp.watch("src/scss/**/*.scss", ['styles']);
    gulp.watch("dist/styles/*").on('change', reload);
    gulp.watch("dist/**/*.html").on('change', reload);
});