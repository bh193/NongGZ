const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


// sass

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function styles() {
    return src('dev/sass/*.scss')
        // sourcemaps 初始化
        .pipe(sourcemaps.init())
        //{outputStyle: 'compressed'} 壓縮用
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'));
}

// html template

const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('dev/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
}
// 壓縮 js

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');


function jsmin() {
    return src('dev/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        })).pipe(dest('dist/js'));
}
exports.js = jsmin;


//清除舊檔案
const clean = require('gulp-clean');

function clear() {
  return src('dist' ,{ read: false ,allowEmpty: true })//不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
  .pipe(clean({force: true})); //強制刪除檔案 
}

exports.del = clear;

// 瀏覽器同步
const browserSync = require('browser-sync');
const reload = browserSync.reload;

function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
     watch(['./dev/sass/*.scss', './dev/sass/**/*.scss'], styles).on('change' , reload);
     watch('./dev/js/*.js', jsmin).on('change' , reload);
     watch(['dev/*.html', 'dev/**/*.html'], includeHTML).on('change' , reload);
     done();
}

exports.default = browser; // dev
exports.packageall = series(clear, parallel (styles ,jsmin ,includeHTML));  // 打包上線

function min_images() {
    return src('dev/img/*.*')
        .pipe(dest('dist/img'))
}
exports.img = min_images;










