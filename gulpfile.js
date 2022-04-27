var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

var csses = [
    'node_modules/materialize-css/dist/css/materialize.min.css',
    'assets/style.css'
];

var jses = [
    'node_modules/materialize-css/dist/js/materialize.min.js',
    'assets/js/app.js'
];  

function styles() {
    return gulp.src(csses)
        .pipe(cleanCSS())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./assets'));
}

function js() {
    return gulp.src(jses)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./assets'));
}

function watch() {
    // gulp.watch(paths.scripts.src, scripts);
    gulp.watch(csses, styles);
}

exports.styles = styles;
exports.js = js;
exports.watch = watch;
exports.default = gulp.parallel(styles, js);