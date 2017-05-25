const path = require('path');
const gulp = require('gulp');
const config = require('./config');
const del = require('del');

/**
 * 拷贝 base-ui/ap-system
 */
gulp.task('copyUIBase', ['cleanBase'], function(){
  return gulp.src(path.join(config.base.path, "/src/ap-system/**/*"))
    .pipe(gulp.dest(path.join(config.project.basePath, 'ap-system')));
});

/**
/**
 * 清空BaseUI
 */
gulp.task('cleanBase', function(cb){
  del([
    path.join(config.project.basePath, '/**/*')
  ]).then(function(){
    cb();
  });
});

/**
 * 清空公共模块
 */
gulp.task('cleanCommon', function(cb){
  del([
    path.join(config.project.commonPath, '/**/*'),
  ]).then(function(){
    cb();
  });
});
