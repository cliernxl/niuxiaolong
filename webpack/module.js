const path = require('path');
const projectRoot = path.resolve(__dirname, '../');
const utils = require('./utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    },
    {
      test: /\.css/,
      loader: ExtractTextPlugin.extract(
        "style-loader",
        "css-loader"
      )
    },
    {
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('imgs/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&minetype=application/font-woff'
    },
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10&minetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10&minetype=application/octet-stream'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10&minetype=image/svg+xml'
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }
    // {
    //   test: /\.js|.vue$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader'
    // }
  ]
};