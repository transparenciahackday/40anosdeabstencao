var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require ('gulp-concat');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var runSequence = require('run-sequence');
var ghPages = require('gulp-gh-pages');

var paths = {
  'assets':'./assets',
  'bower': './bower_components',
  'build': './build',
  'dev': './dev'
};

gulp.task('styles',function(){
  return gulp.src([
      paths.assets + '/styles/app.scss'
    ])
    .pipe(sass({
        includePaths: [
            paths.bower + '/foundation/scss'
        ]
      }
    ))
    .pipe(concat("app.css"))
    .pipe(gulp.dest(paths.dev + '/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts',function(){
  gulp.src([
    paths.bower + '/jquery/dist/jquery.js',
    paths.bower + '/foundation/js/foundation.js',
    paths.bower + '/foundation/js/foundation/foundation.tooltip.js',
    paths.assets + '/scripts/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest(paths.dev + '/js'));

  return gulp.src(paths.bower + '/foundation/js/vendor/modernizr.js')
    .pipe(gulp.dest(paths.dev + '/js'));
})

gulp.task('fonts',function(){
  gulp.src([
    paths.assets + '/fonts/**/*.*'
  ])
  .pipe(gulp.dest(paths.dev + '/fonts'));
  return gulp.src([
    paths.assets + '/foundation-icons/**/*.*'
  ])
  .pipe(gulp.dest(paths.dev + '/foundation-icons'));
})

gulp.task('favicons',function(){
  return gulp.src([
    paths.assets + '/favicons/**/*.*'
  ])
  .pipe(gulp.dest(paths.dev + '/favicons'));
})

gulp.task('images',function(){
  return gulp.src([
    paths.assets + '/images/**/*.*'
  ])
  .pipe(gulp.dest(paths.dev + '/images'));
})

gulp.task('js-watch', ['scripts'], function(){
  browserSync.reload();
});

gulp.task('copyPublicHTML',function () {
    return gulp.src(paths.assets + '/**/*.html').pipe(gulp.dest(paths.dev));
});

gulp.task('buildPublicHTML',['copyPublicHTML'],function(){
  return gulp.src(paths.dev + '/**/*.html')
    .pipe(inject(gulp.src(paths.dev+'/js/modernizr.js', {read: false}), {starttag: '<!-- inject:head:{{ext}} -->', relative: true}))
    .pipe(inject(gulp.src(paths.dev+'/js/app.js', {read: false}),{relative:true}))
    .pipe(inject(gulp.src([paths.dev+'/css/app.css',paths.dev+'/foundation-icons/foundation-icons.css'], {read: false}),{relative:true}))
    .pipe(gulp.dest(paths.dev))
    .pipe(browserSync.stream());
})

gulp.task('copyFinalHTML',function () {
    return gulp.src(paths.assets + '/**/*.html').pipe(gulp.dest(paths.build));
});

gulp.task('buildFinalHTML',['copyFinalHTML'], function () {
  return gulp.src(paths.build + '/**/*.html')
    .pipe(inject(gulp.src(paths.build+'/js/modernizr.js', {read: false}), {starttag: '<!-- inject:head:{{ext}} -->', relative: true}))
    .pipe(inject(gulp.src(paths.build+'/js/app.min.js', {read: false}),{relative:true}))
    .pipe(inject(gulp.src([paths.build+'/css/app.min.css',paths.build+'/foundation-icons/foundation-icons.css'], {read: false}),{relative:true}))
    .pipe(gulp.dest(paths.build));
});

gulp.task('watch',function(){
  browserSync.init({
        server: paths.dev
    });
  gulp.watch(paths.assets + '/**/*.html',['buildPublicHTML']);
  gulp.watch(paths.assets + '/styles/**/*.scss',['styles']);
  gulp.watch(paths.assets + '/scripts/**/*.js',['js-watch']);
  gulp.watch(paths.assets + '/fonts/**/*.*',['fonts']);
  gulp.watch(paths.assets + '/images/**/*.*',['images']);
});

gulp.task("sequentialBuild",function(callback){
  runSequence('styles','favicons','images','scripts','buildPublicHTML','watch','fonts',callback);
});

gulp.task('default',['sequentialBuild']);

gulp.task('build',['buildFinalHTML'],function(){
    gulp.src([
      paths.assets + '/styles/app.scss'
    ])
    .pipe(sass({
        includePaths: [
            paths.bower + '/foundation/scss'
        ]
      }
    ))
    .pipe(concat("app.min.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest('./build/css'));

    gulp.src([
      paths.assets + '/fonts/**/*.*'
    ])
    .pipe(gulp.dest(paths.build + '/fonts'));

    gulp.src([
      paths.assets + '/favicons/**/*.*'
    ])
    .pipe(gulp.dest(paths.build + '/favicons'));

    gulp.src([
      paths.assets + '/foundation-icons/**/*.*'
    ])
    .pipe(gulp.dest(paths.build + '/foundation-icons'));

    gulp.src([
      paths.assets + '/images/**/*.*'
    ])
    .pipe(gulp.dest(paths.build + '/images'));

    gulp.src([
      paths.bower + '/jquery/dist/jquery.js',
      paths.bower + '/foundation/js/foundation.js',
      paths.bower + '/foundation/js/foundation/foundation.tooltip.js',
      paths.assets + '/scripts/app.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));

    return gulp.src(paths.bower + '/foundation/js/vendor/modernizr.js')
      .pipe(gulp.dest('./build/js'));

});

gulp.task('deploy', function() {
  return gulp.src("./build/**/*")
    .pipe(ghPages());
});

