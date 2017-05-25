var config = require("./webpack/config");
var autoprefixer = require('autoprefixer');
var env_config = require("config");

var devtool = "cheap-module-eval-source-map";
if (env_config.env !== "development") {
  devtool = "cheap-module-source-map";
}

module.exports = {
  entry: {
    'build': './src/main.js'
  } ,
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: '[name].js'
  },
  externals: {
    "underscore": "_"
  },
  module: require('./webpack/module'),
  postcss:[autoprefixer({browsers:['last 2 versions']})],
  plugins: require('./webpack/plugins'),
  vue: require('./webpack/vue'),
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devServer: require('./webpack/server'),
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'vue'  : 'vue/dist/vue.min'
    },
    modulesDirectories: [
      'node_modules',
      'project_modules',
      'common_modules'
    ]
  },
  // 开启source-map，webpack有多种source-map，在官网文档可以查到
  devtool: devtool
};
