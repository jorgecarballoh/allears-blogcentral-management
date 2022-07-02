/// <binding AfterBuild='default' />
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");


gulp.task('scripts', function(){
    return gulp.src(["wwwroot/js/**/*.js"])
        .pipe(uglify())
        .pipe(concat('allears.min.js'))
        .pipe(gulp.dest('wwwroot/dist/'))
});


gulp.task('styles', function(){
    return gulp.src(["wwwroot/css/**/*.css"])
        .pipe(uglify())
        .pipe(concat('allears.min.css'))
        .pipe(gulp.dest('wwwroot/dist/'))
});

gulp.task('default', gulp.parallel('scripts', 'styles'), function () { });
