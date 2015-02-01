var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp', { recurse: true });

gulp.task('default', function(){
  console.log('Building');
  gulp.start('browser-sync');
  gulp.start('js');
  gulp.start('less');
});