let gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create();

gulp.task("sass", function () {
  return gulp
    .src("./styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task("watchAll", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./styles/**/*.scss", gulp.series("sass"));
  gulp.watch("./**/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.series(gulp.parallel("watchAll")));
