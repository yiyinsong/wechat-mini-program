const gulp = require('gulp');
const $ = require('gulp-load-plugins')();


gulp.task('sass', function() {
    return gulp.src(['./**/*.scss', '!node_modules/**/*.scss'])
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.cssnano())
        .pipe($.rename({
            extname: '.wxss'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('server', function() {
    gulp.watch(['./app.scss', './pages/**/*.scss'], ['sass']);
});

gulp.task('default', ['server']);