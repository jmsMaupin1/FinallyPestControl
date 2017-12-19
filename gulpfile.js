var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');

gulp.task('sass', ()=>{
	gulp.src('./src/**/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest((f)=>{return f.base;}));
})

gulp.task('watch', ()=>{
	gulp.watch('./src/**/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'watch']);