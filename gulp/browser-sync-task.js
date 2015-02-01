var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
  return browserSync({
    server: {
      baseDir: './'
    },
    open: false
  });
});