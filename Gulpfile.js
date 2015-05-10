'use strict';

var gulp = require('gulp');

var amdclean = require('gulp-amdclean');
var concat = require('gulp-concat');
var fs = require('fs');
var uglyfly = require('gulp-uglyfly');
var rename = require("gulp-rename");
var rm = require('gulp-rm');
var replace = require('gulp-replace');
var wrap = require("gulp-wrap");
var rjs = require('gulp-requirejs');

gulp.task("default", ["clean:tmp"], function () {});

gulp.task("scripts:make-amd", function () {
    return gulp.src("./src/jquery.city.select.js")
        .pipe(rjs({
            name   : "jquery.city.select",
            baseUrl: "./src",
            out    : "jquery.city.select.js",
            shim   : {"jQuery": "jquery"},
            paths  : {"jquery": "empty:"}
        }))
        .pipe(gulp.dest("./tmp"));
});

gulp.task("scripts:build", ["scripts:make-amd"], function () {
    return gulp.src("./tmp/jquery.city.select.js")
        .pipe(amdclean.gulp({"prefixMode": "standard"}))
        .pipe(replace(/^;\(function\(\) \{\n/, ""))
        .pipe(replace(/\n\}\(\)\);$/, ""))
        .pipe(wrap(fs.readFileSync("./.build-wrapper.tpl", "utf8")))
        .pipe(concat("jquery.city.select.js"))
        .pipe(gulp.dest("./dist"))
        .pipe(uglyfly())
        .pipe(concat("jquery.city.select.min.js"))
        .pipe(gulp.dest("./dist"));
});

gulp.task("test:sync", ["scripts:build"], function () {
    return gulp.src("./dist/jquery.city.select.min.js")
        .pipe(gulp.dest("./tests/dist"));
});

gulp.task("demo:sync", ["test:sync"], function () {
    return gulp.src("./dist/jquery.city.select.min.js")
        .pipe(gulp.dest("./demo/dist"));
});

gulp.task("test:mocha", ["test:sync"], function () {
    return gulp
        .src("./tests/phantomjs.html")
        .pipe(mochaPhantomJS());
});

gulp.task("clean:tmp", ["demo:sync"], function () {
    return gulp.src("./tmp/**", {read: false})
        .pipe(rm({async: false}))
})