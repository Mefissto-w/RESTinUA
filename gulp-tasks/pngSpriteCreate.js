import gulp        from 'gulp';                    // https://gulpjs.com/
import spritesmith from 'gulp.spritesmith';        // https://www.npmjs.com/package/gulp.spritesmith

import { path } from '../config.gulp';

const src          = path.pngSpriteBuild.src;
const name         = path.pngSpriteBuild.name;    
const cssName      = path.pngSpriteBuild.cssName;    
const processor    = path.pngSpriteBuild.processor;    
const imgLocation  = path.pngSpriteBuild.imgLocation;    
const dist         = path.pngSpriteBuild.dist;    
const cssPath      = path.pngSpriteBuild.cssPath;    

module.exports = () => {
    let spriteData =  gulp.src(src).pipe(spritesmith({
        imgName  : name,
        cssName  : cssName,
        cssFormat: processor,
        imgPath  : imgLocation,
        padding  : 90
    }));

    spriteData.img.pipe(gulp.dest(dist));
    spriteData.css.pipe(gulp.dest(cssPath))
};