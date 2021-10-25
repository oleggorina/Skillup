const {src, dest, watch, task, series, parallel} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const cssnano = require('cssnano')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const csscomb = require('gulp-csscomb')
const mqpacker = require('css-mqpacker')
const sortCSSmq = require('sort-css-media-queries')

const PATH = {
  scssFiles: './assets/scss/**/*.scss',
  scssFolder: './assets/scss',
  scssFile: './assets/scss/style.scss',
  cssFolder: './assets/css',
  htmlFiles: './*.html',
  jsFiles: [
    './assets/js/**/*.js',
    '!./assets/js/**/*min..js',
    '!./assets/js/**/all.js'
  ]
}

const PLUGINS = [
  autoprefixer({
  overrideBrowserslist: ['last 5 versions', '> 0.1%'],
  cascade: true
  }),
  mqpacker({sort: sortCSSmq})
  ]

function scssMin() {
  const pluginsExtended = [...PLUGINS, cssnano({preset: 'default'})]

  return src(PATH.scssFile)
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(postcss(pluginsExtended))
  .pipe(rename({suffix:'.min'}))
  .pipe(dest(PATH.cssFolder))
  .pipe(browserSync.stream())
}

function scssDev() {
  return src(PATH.scssFile, {sourcemaps: true})
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(postcss(PLUGINS))
  .pipe(dest(PATH.scssFile, {sourcemaps: true}))
  .pipe(browserSync.stream())
}

function scss() {
  return src(PATH.scssFile)
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(postcss(PLUGINS))
  .pipe(dest(PATH.cssFolder))
  .pipe(browserSync.stream())
}

function comb() {
  return src(PATH.scssFiles)
    .pipe(csscomb('./.csscomb.json'))
    .pipe(dest(PATH.scssFolder))
}

async function sync() {
  browserSync.reload()
}

function syncInit() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

function watchFiles() {
  syncInit()
  watch(PATH.scssFiles, series(scss, scssMin))
  watch(PATH.htmlFiles, sync)
  watch(PATH.jsFiles, sync)
}

function concat() {
  
}

task('scss', series(scss, scssMin))
task('min', scssMin)
task('dev', scssDev)
task('comb', comb)
task('watch', watchFiles)

// function build() {
//   return gulp.src('assets/scss/style.scss')
//     .pipe(gulp.dest('assets/css'))
// }