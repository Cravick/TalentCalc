var gulp = require('gulp'),
    less = require('gulp-less'),
    bs = require('browser-sync').create();

gulp.task('less', function() {
    return gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'))
        .pipe(gulp.dest('src/styles'))
        .pipe(bs.stream());
});

gulp.task('serve', function() {
    bs.init({
        server: ["/src", "/dist"],
        port: 3000,
        ui: {
            port: 3001
        }
    });

    gulp.watch('src/styles/*.less', ['less']);
    gulp.watch('src/*.html').on('change', bs.reload());
});