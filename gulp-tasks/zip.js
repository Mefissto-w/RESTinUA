import gulp from 'gulp';          // https://gulpjs.com/
import zip  from 'gulp-zip';       // https://www.npmjs.com/package/gulp-zip
 
import { path } from '../config.gulp.js'; 

const src = path.zip.src;
const name = path.zip.name;
const dist = path.zip.dist;

module.exports = () => {
    gulp.src(src)
    .pipe(zip(name))
    .pipe(gulp.dest(dist)) 
};