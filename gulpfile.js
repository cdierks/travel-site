var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.")
});

gulp.task('watch', function(){
  watch('./app/index.html', function() {
    gulp.start('html')
  })
});
