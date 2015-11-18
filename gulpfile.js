// /////////////////////////////////////
// Add dependencies
// /////////////////////////////////////
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync');


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
    outputStyle: 'compressed'
  }))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});


// /////////////////////////////////////
// Browser sync server
// /////////////////////////////////////
gulp.task('sync', function(){
  browserSync.init({
    server: './'
  });
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});


// /////////////////////////////////////
// Default Task
// /////////////////////////////////////
gulp.task('default', ['sass', 'sync']);
