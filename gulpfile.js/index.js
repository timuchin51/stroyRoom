const gulp = require(`gulp`)

const pug2html = require(`./pug2html`)
const styles = require(`./styles`)
const script = require(`./script`)
const clean = require(`./clean`)
const imageMinify = require(`./images`)
const browserSync = require(`./browserSync`)
const copy = require(`./copy`)

exports.imageMinify = imageMinify
exports.clean = clean
exports.script = script
exports.styles = styles
exports.bs = browserSync
exports.start = gulp.series(
    clean,
    copy,
    gulp.parallel(
        pug2html,
        styles,
        script,
        imageMinify
    ),
    browserSync
)
