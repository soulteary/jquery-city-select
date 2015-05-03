var gulp = require('gulp');

var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');
var path = require('path');
var rename = require("gulp-rename");
var dirSync = require('gulp-directory-sync');
var uglify = require('gulp-uglify');

gulp.task('default', ['build']);
gulp.task("build", ["script:build"], function () {});
gulp.task("script:build", ["scripts:minify"], function () {});

// 编译脚本
gulp.task("scripts:compile", function () {
    return gulp.src("src/jquery.city.select.js")
        .pipe(amdOptimize("jquery.city.select", {wrapShim: true}))
        .pipe(concat("jquery.city.select.js"))
        .pipe(gulp.dest("dist"));
});

// 压缩脚本
gulp.task("scripts:minify", ["scripts:compile"], function () {
    return gulp.src("dist/jquery.city.select.js")
        .pipe(concat("jquery.city.select.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

// 同步输出文件到Demo目录
gulp.task("demo:sync", function () {
    gulp.src('')
        .pipe(dirSync("dist", "demo/assets/dist", {printSummary: true}))
        .on('error', function (e) {
            console.log(e);
        });
});
