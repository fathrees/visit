var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concatCSS = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    angularFilesort = require('gulp-angular-filesort'),
      inject = require('gulp-inject'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename');

gulp.task('css', function() {
   return gulp.src('app/css/*.css')
       .pipe(concatCSS('bundle.css'))
       .pipe(cleanCSS())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('app/css'));
});

gulp.task('js', function() {
    return gulp.src('index.html')
        .pipe(inject(
            gulp.src(['app/**/*.js'])
                .pipe(angularFilesort())
                .pipe(concat('app.js'))
                .pipe(gulp.dest('app/build'))
                .pipe(jsmin())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest('app/build'))
        ));
});

gulp.task('watch', function(){
   gulp.watch('app/css/*.css', ['css'])
});

gulp.task('default', ['watch', 'css', 'js']);