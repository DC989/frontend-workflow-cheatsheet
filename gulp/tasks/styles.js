var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssAutoprefixer = require('autoprefixer');
var cssMixins = require('postcss-mixins');
var cssVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('css', function() {
    return gulp.src('app/assets/styles/styles.css')
               .pipe(postcss([cssImport, cssMixins, cssVars, cssNested, cssAutoprefixer]))
               .on('error', function(error) {
                   console.log(error.toString());
                   this.emit('end')
               })
               .pipe(gulp.dest('app/temp/styles'));
});