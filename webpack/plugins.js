const webpack = require('webpack');
const config = require("config");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const wConfig = require("./config");

let definePlugin = new webpack.DefinePlugin({
  _config_: JSON.stringify(config)
});

let copyWebpackPlugin = new CopyWebpackPlugin([
  { from: path.join(wConfig.webpack.projectStaticPath, 'fonts'),              to: 'vendor/fonts' },
  { from: path.join(wConfig.webpack.baseStaticPath, 'css'),              to: 'vendor/css' },
  { from: path.join(wConfig.webpack.systemStaticPath, 'js'),              to: 'vendor/js' },
  { from: path.join(wConfig.webpack.systemStaticPath, 'fonts'),           to: 'vendor/fonts' },
  { from: path.join(wConfig.webpack.systemStaticPath, 'image'),           to: 'vendor/image' },
  { from: path.join(wConfig.webpack.baseStaticPath, 'tingyun'),           to: 'vendor/tingyun' },
  { from: path.join('config', 'index.js'), to: 'vendor/config/index.js' },
  { from: path.join(wConfig.webpack.modulesPath, 'bootstrap/dist'), to: 'vendor/bootstrap' },
  { from: path.join(wConfig.webpack.modulesPath, 'jquery/dist'),    to: 'vendor/jquery' },
  { from: path.join(wConfig.webpack.modulesPath, 'element-ui/lib'), to: 'vendor/element-ui' },
  { from: path.join(wConfig.webpack.modulesPath, 'underscore'),     to: 'vendor/underscore' }
]);

let htmlWebpackPlugin = new HtmlWebpackPlugin({            //根据模板插入css/js等生成最终HTML
  favicon: path.join(wConfig.webpack.baseStaticPath, 'image/logo.png'),           //favicon路径
  template: wConfig.webpack.html.template,                 //html模板路径
  filename: wConfig.webpack.html.filename,
  inject: true,                                            //允许插件修改哪些内容，包括head与body
  hash: true,                                              //为静态资源生成hash值
  minify: {                                                //压缩HTML文件
    removeComments: true,                                  //移除HTML中的注释
    // collapseWhitespace: true                               //删除空白符与换行符
  }
});

let uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
    drop_debugger: true,
    drop_console: true
  }
});

var plugins = [
  new ExtractTextPlugin("[name].style.css"),
  copyWebpackPlugin,
  definePlugin,
  htmlWebpackPlugin
];
if(config.env !== 'development'){
  plugins.push(uglifyJsPlugin);
}
module.exports = plugins;
