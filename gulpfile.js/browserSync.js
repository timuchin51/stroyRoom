const gulp = require('gulp');

const pug2html = require('./pug2html');
const styles = require('./styles');
const script = require('./script');
const imageMinify = require('./images');
const server = require('browser-sync').create();

// Static server
module.exports = function browserSync(cb) {
    server.init({
        server: {
            baseDir: "build",
            notify: false,
            cors: true,
        }
    });

    gulp.watch('src/pug/pages/**/*.pug', gulp.series(pug2html,
            cb => gulp.src('build').pipe(server.stream().on('end', cb))));
    gulp.watch('src/js/**/*.js', gulp.series(script,
            cb => gulp.src('build/js').pipe(server.stream().on('end', cb))));
    gulp.watch('src/img/**/*.*', gulp.series(imageMinify,
            cb => gulp.src('build/images').pipe(server.stream().on('end', cb))));
    gulp.watch('src/scss/**/*.scss', gulp.series(styles,
            cb => gulp.src('build/css').pipe(server.stream().on('end', cb))));
    cb();
};