'use strict';

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    del         = require('del'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    htmlmin     = require('gulp-htmlmin'),
    minifyCss   = require('gulp-minify-css'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload;

var sassOptions = {
    defaultEncoding: 'UTF-8',
    lineNumbers: true,
    style: 'expanded',
    precision: 8
};

gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('components', function () {
    return gulp.src('src/components/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/demo'));
});

gulp.task('sass', function () {
    gulp.src('src/scss/**/*.scss')
    .pipe(concat('app.css'))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/demo'))
    .pipe(browserSync.stream());
});

gulp.task('packageSass', function () {
    return gulp.src('src/scss/viewport.scss')
        .pipe(gulp.dest('dist/'));
});

gulp.task('packageScripts', function () {
    return gulp.src('src/assets/js/viewport.js')
        .pipe(gulp.dest('dist/'));
});

gulp.task('demoScripts', function () {
    return gulp.src([
            'node_modules/angular/angular.min.js',
            'src/**/*.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/demo'));
});

gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

gulp.task('favicon', function (cb) {
    return gulp.src('src/favicon.ico')
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['html', 'components', 'sass', 'packageSass', 'packageScripts', 'demoScripts', 'favicon']);

gulp.task('default', ['build']);

gulp.task('serve', ['html', 'sass', 'demoScripts'], function () {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/**/*.js', ['demoScripts']);
    gulp.watch('src/index.html', ['html']);
    gulp.watch('src/components/**/*.html', ['components']);

    gulp.watch('src/index.html').on('change', reload);
    gulp.watch('src/components/**/*.html').on('change', reload);
    gulp.watch('dist/demo/app.js').on('change', reload);
});