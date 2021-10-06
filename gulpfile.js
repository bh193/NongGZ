const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


//--------------sass------------------//
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function styles() {
    return src('dev/sass/*.scss')
        // sourcemaps 初始化
        .pipe(sourcemaps.init())
        //{outputStyle: 'compressed'} 壓縮用
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'));
}

//-------------- html template------------------//
const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('dev/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
}


//--------------壓縮 js------------------//
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


//--------------清除舊檔案------------------//
const clean = require('gulp-clean');

function clear() {
    return src('dist', { read: false, allowEmpty: true })//不去讀檔案結構，增加刪除效率  / allowEmpty : 允許刪除空的檔案
        .pipe(clean({ force: true })); //強制刪除檔案 
}

exports.del = clear;

//--------------img壓縮------------------//
const imagemin = require('gulp-imagemin');
function images_mem() {
    return src(['dev/images/mem/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/mem'))
}
function images_farm() {
    return src(['dev/images/farm/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/farm'))
}
function images_fruit() {
    return src(['dev/images/fruit/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/fruit'))
}
function images_tree() {
    return src(['dev/images/tree/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/tree'))
}
function images_activity() {
    return src(['dev/images/activity/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/activity'))
}
function images_post() {
    return src(['dev/images/post/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/post'))
}
function images_map() {
    return src(['dev/images/map/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/map'))
}
function images_common() {
    return src(['dev/images/common/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/common'))
}
function images_img() {
    return src(['dev/images/img/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/img'))
}
function images_png() {
    return src(['dev/images/png/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/png'))
}
function images_svg() {
    return src(['dev/images/svg/*.*'])
        .pipe(imagemin())
        .pipe(dest('dist/images/svg'))
}
function images(){
    images_mem();
    images_farm();
    images_fruit();
    images_tree();
    images_activity();
    images_post();
    images_map();
    images_common();
    images_img();
    images_png();
    images_svg();
}

//--------------傳輸字體------------------//
function font() {
    return src(['dev/font/*.*'])
        .pipe(dest('dist/font'))
}
//--------------json------------------//
function gmap() {
    return src(['dev/json/*.*'])
        .pipe(dest('dist/json'))
}

function phps() {
    return src(['dev/phps/*.*'])
        .pipe(dest('dist/phps'))
}

//--------------瀏覽器同步------------------//
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
    watch(['./dev/sass/*.scss', './dev/sass/**/*.scss'], styles).on('change', reload);
    watch('./dev/js/*.js', jsmin).on('change', reload);
    watch(['dev/*.html', 'dev/**/*.html'], includeHTML).on('change', reload);
    watch('./dev/phps/*.php', phps).on('change', reload);
    done();
}

exports.default = series(browser, font, images,gmap); // dev
exports.packageall = series(clear, parallel(styles, jsmin, includeHTML, font), parallel(images_mem, images_farm, images_fruit, images_tree, images_activity, images_post, images_map, images_common, images_img, images_png, images_svg,gmap, phps));  // 打包上線













