const gulp         = require("gulp"),
      postcss      = require("gulp-postcss"),
      autoprefixer = require("autoprefixer"),
      cssvars      = require("postcss-simple-vars"),
      cssnested    = require("postcss-nested"),
      cssimports   = require("postcss-import"),
      cssmixins    = require("postcss-mixins");

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssimports, cssvars, cssmixins, autoprefixer, cssnested]))
    .on("error", function(errorInfo){
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
