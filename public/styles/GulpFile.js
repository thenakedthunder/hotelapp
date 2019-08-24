var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'))
});


//Watch task
gulp.task('default', function () {
    return gulp.watch('./*.scss', gulp.series('styles'));
});