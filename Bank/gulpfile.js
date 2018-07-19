const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	concat = require('gulp-concat');


gulp.task('css', function(){
	return gulp.src('src/scss/main.scss')
	  .pipe(plumber())
	  .pipe(sass())
	  .pipe(autoprefixer({
	  	browsers: ['last 10 versions']
	  }))
	  .pipe(csso())
	  .pipe(rename({
	  	extname: '.css',
	  	suffix: '.min'

	  }))
	  .pipe(gulp.dest('dist/css'))
	  .pipe(browserSync.stream())
})

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: './dist'
		}, 
		port:3000,
		open:true,
		notify: false
	})
})

gulp.task('watch', ['browser-sync','css'], function(){
	gulp.watch('src/scss/**/*.scss', ['css'])
	gulp.watch('src/libs/misc/**/*.scss', ['css'])
	gulp.watch('src/libs/js/*.custom.js', ['js'])
	gulp.watch('src/libs/jquery/*.min.js', ['jQ'])
	gulp.watch('src/libs/slider/*.min.js',['sliderJS'])
	gulp.watch('src/libs/img/*.*',['imagemin'])
	gulp.watch('dist/*.html',['html'])
   gulp.watch('dist/*.html', browserSync.reload)
})

gulp.task('imagemin', function(){
	return gulp.src('src/libs/img/*.*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'))
})

gulp.task('js', function(){
	return gulp.src('src/libs/js/*.custom.js')
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/js'));
})
gulp.task('jQ', function(){
	return gulp.src('src/libs/jquery/*.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/jQuery'));
})
gulp.task('html', function(){
	return gulp.src('dist/*.html')
	       .pipe(concat('index.html'))
	       .pipe(gulp.dest('dist'))
})

gulp.task('sliderJS', function(){
	return gulp.src('src/libs/slider/*.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/slick'));
})
