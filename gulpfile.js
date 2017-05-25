const gulp = require('gulp');
const path = require('path');
const config = require('./gulp/config');
const wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

/**
 * 项目构建
 */
gulp.task('build', function () {
  gulp.start('init-build');
});

/**
 * 拷贝base-ui
 */
gulp.task('copyBaseUI', ['copyUIBase']);

/**
 * 拷贝公共模块
 */
gulp.task('copyCommon', ['cleanCommon'], function () {
  return gulp.src(path.join(config.base.path + "/" + config.base.commonPath, "/**/*"))
    .pipe(gulp.dest(config.project.commonPath));
});