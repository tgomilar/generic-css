'use strict';

var projectURL = 'generic-css.tanja.izdelava.si';
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];


// Static Server + watching scss/js/html files
gulp.task('serve', ['styles'], function () {
    browserSync.init({
        proxy: projectURL,
        host: projectURL,
        open: 'external'
    });
    gulp.watch("**/*.scss", ['styles']);
    // gulp.watch('../scripts/**/*.js').on('change', browserSync.reload);
    browserSync.watch("*.html").on("change", browserSync.reload);
});

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('theme/documentation.scss')
    // Compile SASS files
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(browserSync.stream())
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('css/'))
});

gulp.task('styles-generic', function () {
    return gulp.src('generic.scss')
    // Compile SASS files
        .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
        }))
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(browserSync.stream())
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('css/'))
});


// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
    runSequence(
        'styles',
        'serve'
    );
});