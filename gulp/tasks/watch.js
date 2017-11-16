const gulp        = require('gulp'),
      watch       = require('gulp-watch'),
      browserSync = require('browser-sync').create();


gulp.task('watch', function() {
  browserSync.init({
    notify: false, // turn off the browser-sync notification
    server: {
      baseDir: "app"
    }
  });
  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });
  gulp.watch('./app/assets/styles/**/*.css', ['cssInject']);

  gulp.watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
});

//take the content of our compiled css file
//hand that over to browser-sync so that
//it can inject those style into the page on the fly
//['styles'] means the 'styles' task have to be run first
//before this cssInject task
gulp.task('cssInject', ['styles'], function() {

  //async function pointing toward the source
  return gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
    //make the content piped and available in the browser
});

// reload the page every time scripts.js is run
gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
})
