// Example gulp 4 file
// https://gist.github.com/jeromecoupe/0b807b0c1050647eb340360902c3203a

"use strict";

const { src, dest, watch, series } = require('gulp');
const gutil = require("gulp-util");
const sass = require('gulp-sass')(require('sass'));
const browsersync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const terser = require('gulp-terser');
const rename = require("gulp-rename");
const postcss = require('gulp-postcss');
const cssnano = require("cssnano");
const concat = require('gulp-concat');


// Build app.css file
function css() {
	return src("resources/scss/app.scss")
		.pipe(sass({
			debugInfo: true,
			lineNumbers: true
		}).on("error", sass.logError))
		.pipe(autoprefixer("last 4 version"))
		.pipe(dest("docs/css"))
		.pipe(postcss([cssnano()]))
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("docs/css"))
		.pipe(browsersync.reload({ stream: true }));
};
// build third-party CSS files that can't be compiled through PostCSS
function libraries() {
	return src([
			"node_modules/bootstrap/dist/css/bootstrap.min.css"
		])
		.pipe(dest("docs/css"));
}
// Build JS
function js() {
	return src([
			"node_modules/bootstrap/dist/js/bootstrap.min.js",
			"resources/js/app.js"
		])
		.pipe(concat("app.js"))
		.pipe(dest("docs/js"))
		.pipe(terser())
		.on("error", function(err) {
			gutil.log(gutil.colors.red("[Error]"), err.toString());
		})
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("docs/js"))
		.pipe(browsersync.reload({ stream: true, once: true }));
};
// Run Browsersync through port 3000 for local testing with live reload
function browsersyncServe(cb){
	browsersync.init({
	server: {
		baseDir: 'docs'
	}
	});
	cb();
}
function browsersyncReload(cb){
	browsersync.reload();
	cb();
}

// Watch for file changes within specified directories
function watchTask(){
	watch('docs/*.html', browsersyncReload);
	watch('resources/scss/*.scss', series(css, browsersyncReload));
	watch('resources/js/*.js', series(js, browsersyncReload));
}

// Run our tasks
exports.default = series(
	css,
	libraries,
	js,
	browsersyncServe,
	watchTask
);