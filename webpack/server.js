const config = require('./config');

module.exports = {
  port: config.server.port,
  contentBase: "./",
  colors: true,
  historyApiFallback: true,
  inline: true,
  hot: false,
  grogress: true
};