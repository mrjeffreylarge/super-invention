var gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  sass = require('gulp-sass'),
  mainBowerFiles = require('main-bower-files');

// Lint the JavaScript
gulp.task('lint', function () {
  //This task is aware of the .eslintignore and .eslintrc files on the root
  return gulp.src(['./js/**/*.js'])
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(eslint.format());
});

// Compile the sass
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

// Watch for changes in sass files
gulp.task('watch:sass', ['sass'], function () {
  return gulp.watch('./scss/**/*', ['sass']);
});

// Watch for changes in JavaScript files
gulp.task('watch:js', ['lint'], function () {
  return gulp.watch('./js/**/*', ['lint']);
});

// Move files from bower components into project
gulp.task('main-bower-files', function() {
    return gulp.src(mainBowerFiles(/* options */), { base: './bower_components' })
        .pipe(gulp.dest('./js/vendor'));
});

gulp.task('watch', ['build', 'watch:sass', 'watch:js']);

gulp.task('build', [
  'main-bower-files',
  'sass'
]);

gulp.task('default', [
  'watch'
]);
