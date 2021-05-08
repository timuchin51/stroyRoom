const gulp = require(`gulp`)

module.exports = function copy(cb) {
  gulp.src(`src/scss/*.css`)
        .pipe(gulp.dest(`build/css`))
  gulp.src(`src/js/*.min.js`)
        .pipe(gulp.dest(`build/js`))
  cb()
}
