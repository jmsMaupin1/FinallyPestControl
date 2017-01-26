var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', ()=>{
	gulp.src('./src/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest((f)=>{return f.base;}));
})

gulp.task('watch', ()=>{
	gulp.watch('./src/**/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'watch']);