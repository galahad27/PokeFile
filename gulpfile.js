var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require("gulp-useref");
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var fs = require("fs");

//var CSSSOURCE = "./src/**/*.css";
//var HTMLSOURCE = ["./app/html/header.html", "./app/html/pages/**/*.html", "./app/html/footer.html"];
//var JSSOURCE = ["./app/js/dev.js", "./app/js/common/**/*.js", "./app/js/pages/**/*.js", "./app/js/init.js"];
var HTMLSOURCE = ["./src/header.html", "./src/pages/**/*.html", "./src/footer.html"]
// var JSSOURCE = ["./src/dev.js", "./src/ui/**/*.js", "./src/init.js"]
var SCSSSOURCE = "./src/**/*.scss";

var CSSDIR = "./app/css";
var HTMLDIR = "./app/html";
var JSDIR = "./app/js";
var SCSSDIR = "./app/scss";

var APP = "./app";
var INDEX = "index.html";
var MAIN = "main.js";
var STYLE = "style.css";

var DIST = "./dist";

var JSSOURCE = ["./src/dev.js"];
var files = fs.readdirSync("./src");
for(var i in files)
{
	var relPath = files[i];
	console.log(relPath);
	var info = fs.lstatSync("./src/" + relPath);
	if(info.isDirectory()) {
		JSSOURCE.push("./src/" + relPath + "/*.js");
		JSSOURCE.push("./src/" + relPath + "/**/*.js");
	}
}
JSSOURCE.push("./src/init.js");

//Development
gulp.task("dev", function(callback){
	runSequence("concat-html",
		"concat-css",
		"concat-js",
		["browserSync", "watch"],
		callback)
});

gulp.task("browserSync", function(){
	browserSync.init({
		server:{
			baseDir: APP,
		},
	});
});

gulp.task("watch", ["browserSync", "concat-css", "concat-html", "concat-js"], function(){
	gulp.watch(SCSSSOURCE, ["concat-css"]);
	gulp.watch(HTMLSOURCE, ["concat-html"]);
	gulp.watch(JSSOURCE, ["concat-js"]);
});

gulp.task("concat-css", function(){
	return gulp.src(SCSSSOURCE)
		.pipe(concat(STYLE))
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest(APP))
		.pipe(browserSync.reload({
      		stream: true
    	}));
});

gulp.task("concat-html", function(){
	return gulp.src(HTMLSOURCE)
		.pipe(concat(INDEX))
		.pipe(gulp.dest(APP))
		.pipe(browserSync.reload({
      		stream: true
    	}));
});

gulp.task("concat-js", function(){
	return gulp.src(JSSOURCE)
		.pipe(concat(MAIN))
		.pipe(gulp.dest(APP))
		.pipe(browserSync.reload({
      		stream: true
    	}));
});

//Production
gulp.task("production", function(callback){
	runSequence('clean:dist',
		"concat-html",
		"sass",
		"concat-css",
		"concat-js",
		"useref",
		callback)
});

gulp.task("useref", function(){
	return gulp.src(APP+"/"+INDEX)
		.pipe(useref())
		.pipe(gulpIf("*.js", uglify()))
		.pipe(gulpIf("*.css", cssnano()))
		.pipe(gulp.dest(DIST));
});

gulp.task("clean:dist", function(){
	return del.sync(DIST);
});