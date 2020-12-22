var pug = require("gulp-pug");
var watch = require("gulp-watch");

gulp.task("pug", function () {
  return gulp
    .src("views/*.pug")
    .pipe(
      pug({
        doctype: "html",
        pretty: false,
      })
    )
    .pipe(gulp.dest("./src/"));
});
