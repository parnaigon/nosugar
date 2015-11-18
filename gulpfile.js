// /////////////////////////////////////
// Add dependencies
// /////////////////////////////////////
var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    plumber   = require('gulp-plumber');


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
});





// /////////////////////////////////////
// Default Task
// /////////////////////////////////////
gulp.task('default', ['sass']);
