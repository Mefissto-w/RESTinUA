import gulp  from 'gulp';           // https://gulpjs.com/
import gutil from 'gulp-util';      // https://www.npmjs.com/package/gulp-util
import ftp   from 'gulp-ftp';       // https://www.npmjs.com/package/gulp-ftp

module.exports = () => {
    gulp.src('./public')
    .pipe(ftp({
        host: 'zzz.com.ua',
        user: 'sashaamid',
        pass: 'Amid19942311'
    }))
    gulp.dest('./public')
    .pipe(gutil.noop());
};