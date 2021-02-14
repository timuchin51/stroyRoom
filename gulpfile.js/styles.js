const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const shorthand = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');
const gulpStylelint = require('gulp-stylelint');
const rename = require('gulp-rename')

module.exports = function styles() {
    return gulp.src('src/scss/*.scss')
        .pipe(plumber())
        .pipe(gulpStylelint({
            failAfterError: false,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist:['last 4 versions'],
            cascade: false
        }))
        .pipe(shorthand())
        .pipe(cleanCSS({
            debug: true,
            compatibility: '*'
        }, details => {
            console.log(`${details.name}: Original size: ${details.stats.originalSize}`);
            console.log(`${details.name}: Minified size: ${details.stats.minifiedSize}`);
        }))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'))
};