import _ from 'underscore';

G = {
  env: 'development',
  errorPage: '/error',
  lang: 'zh',
  messageLock: false,
  isRelyAPI: false,
  homePage: '/home',
  loginPage: '/login',
  storage_key: 'storage_key',
  options_key: 'options_key',
  lang_key: 'lang_key',
  new_base_api: '',
  title: '',
  showLogo: true,
  $message: null
};

G = _.extend(G, _config_);
G = _.extend(G, APP_CONFIG[_config_.env]);
if (!G.isRelyAPI) {
  G.localResource = require('./ap-base/local-resources');
}
