const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");


function compilaSass(){
  return gulp.src("./styles/sass/main.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest("./styles")) 
}

function compress() {
  return gulp.src("./scripts/main.js")
        .pipe(uglify())
        .pipe(gulp.dest("./js-compri"))
};

function comprimeimg (){
  return gulp.src("./imagens/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./img-compri"))
};

exports.default = gulp.parallel(compilaSass, compress, comprimeimg)
exports.sass = compilaSass;
exports.compress = compress
exports.comprimeimg = comprimeimg
exports.watch = function () {
  gulp.watch("./styles/sass/main.scss", { ignoreInitial: false }, gulp.parallel(compilaSass));
  gulp.watch("./scripts/main.js", { ignoreInitial: false }, gulp.parallel(compress));
  gulp.watch("./imagens/*", { ignoreInitial: false }, gulp.parallel(comprimeimg));
};