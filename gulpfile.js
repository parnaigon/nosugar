// /////////////////////////////////////
// Add dependencies
// /////////////////////////////////////
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat');

// /////////////////////////////////////
// Set up error hundler
// /////////////////////////////////////
var onError = function(err) {
  console.log(err);
  this.emit('end');
};

// /////////////////////////////////////
// Sass task
// /////////////////////////////////////
gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});


// /////////////////////////////////////
// Javascrips task
// /////////////////////////////////////
gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./js/'))
});


// /////////////////////////////////////
// Browser sync server
// /////////////////////////////////////
gulp.task('sync', function(){
  browserSync.init({
    server: './'
  });
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./lib/*.js', ['scripts']).on('change', browserSync.reload);;
  gulp.watch('./*.html').on('change', browserSync.reload);
});


// /////////////////////////////////////
// Default Task
// /////////////////////////////////////
gulp.task('default', ['sass', 'scripts', 'sync']);
