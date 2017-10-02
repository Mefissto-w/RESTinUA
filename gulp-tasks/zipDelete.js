import gulp from 'gulp';          // https://gulpjs.com/
import clean from 'gulp-clean';   // https://www.npmjs.com/package/gulp-clean

import { path } from '../config.gulp.js'; 

const name = path.zip.name;
const dist = path.zip.dist;

module.exports = () => {
    return gulp.src(`${dist}${name}`, {read: false})
    .pipe(clean());
};