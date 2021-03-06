import gulp       from 'gulp';                    // https://gulpjs.com/
import svgmin     from 'gulp-svgmin';             // https://www.npmjs.com/package/gulp-svgmin
import cheerio    from 'gulp-cheerio';            // https://www.npmjs.com/package/gulp-cheerio
import svgSymbols from 'gulp-svg-symbols';        // https://www.npmjs.com/package/gulp-svg-symbols
import rename     from "gulp-rename";             // https://www.npmjs.com/package/gulp-rename

import { path } from '../config.gulp';

const src  = path.svgSpriteBuild.svgSrcMonocolor;
const name = path.svgSpriteBuild.svgNameMonocolor;    

module.exports = () => {
   return gulp.src(src)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: ($) => {
                $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(svgSymbols({
            templates: ['default-svg']
        }))
        .pipe(rename(name))
        .pipe(gulp.dest('./'));
};