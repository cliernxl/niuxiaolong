module.exports = {
  server: {
    port: 3010,
    host: 'localhost'
  },
  webpack:  {
    entry: './src/main.js' ,
    output: {
      path: './dist',
      publicPath: '/dist/',
      filename: 'build.js'
    },
    baseStaticPath: './src/ap-base/static',           // 静态文件存放目录
    systemStaticPath: './base-ui/ap-system/static',   // system静态文件存放目录
    projectStaticPath: './src/project/static',        // project静态文件存放目录
    modulesPath: './node_modules',
    html: {
      template: './src/index.html',
      filename: '../index.html'
    }
  }
};
