var gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  sass = require('gulp-sass'),
  mainBowerFiles = require('main-bower-files');

gulp.task('main-bower-files', function() {
    return gulp.src(mainBowerFiles(/* options */), { base: './bower_components' })
        .pipe(gulp.dest('./js/vendor'));
});

gulp.task('lint', function () {
  //This task is aware of the .eslintignore and .eslintrc files on the root
  return gulp.src(['./js/**/*.js'])
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format());
});

gulp.task('sass', [], function () {
  return gulp.src(['./scss/**/*.scss'])
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
      .on('error', sass.logError)
    )
    .pipe(gulp.dest('./css'));
});

gulp.task('watch:sass', ['sass'], function () {
  return gulp.watch('./scss/**/*', ['sass']);
});

gulp.task('watch:js', ['lint'], function () {
  return gulp.watch('./js/**/*', ['lint']);
});

gulp.task('watch', ['build', 'watch:sass', 'watch:js']);

gulp.task('build', [
  'main-bower-files',
  'sass'
]);

gulp.task('default', [
  'watch'
]);
