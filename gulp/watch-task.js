var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('watch', function(){
  gulp.start('default');
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch('./src/*.html', browserSync.reload);
});