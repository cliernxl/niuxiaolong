var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  loaders: ExtractTextPlugin.extract("vue-style!css-loader!less-loader"),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
};