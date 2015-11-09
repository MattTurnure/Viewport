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
    gulp.src('src/assets/scss/main.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(notify({message: 'Sass task complete'}));
});

gulp.task('scripts', function () {
    return gulp.src([
            'src/assets/js/viewport.js'
        ])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({message: 'Scripts task complete'}));
});

gulp.task('demoScripts', function () {
    return gulp.src([
            'src/assets/js/demo.js'
        ])
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(notify({message: 'Demo Scripts task complete'}));
});

gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

gulp.task('favicon', function (cb) {
    return gulp.src('src/favicon.ico')
        .pipe(gulp.dest('dist'))
        .pipe(notify({message: 'Favicon task complete'}));
});

gulp.task('build', ['html', 'styles', 'scripts', 'demoScripts', 'favicon']);

gulp.task('default', ['build']);

// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function () {

    browserSync({
        server: "./dist"
    });

    gulp.watch("src/**/*.html", ['html']);
    gulp.watch("src/assets/js/**/*.js", ['scripts']);
    gulp.watch("src/assets/js/**/*.js", ['demoScripts']);
    gulp.watch("src/scss/**/*.scss", ['styles']);

    gulp.watch("dist/**/*.html").on('change', reload);
    gulp.watch("dist/assets/js/*").on('change', reload);
    gulp.watch("dist/styles/*").on('change', reload);
});