/**
 * 路由配置文件
 */
import _ from 'underscore';
import {Storage} from 'utils';
import {router} from '../index';

G.loginPage = _config_.loginPage || "/login"; //登录页路由放入全局变量
G.homePage = _config_.homePage || "/system";    //首页路由放入全局变量

/**
 * 首页子路由
 */
let children = [];
/* 引入系统管理路由 */
children = _.union(children, router.children);
/* index 首页路由配置 */
let indexRoute = {
  path: '/',
  component: router.index,
  children: children,
  beforeEnter: (to, from, next) => {
    if (_config_.isRelyAPI) {
      if (to && to.path !== G.loginPage) {
        let user_info = Storage.get(G.storage_key);
        if (_.isEmpty(user_info)) {
          next(G.loginPage);
        } else {
          next();
        }
      } else if (to && to.path === G.loginPage) {
        let user_info = Storage.get(G.storage_key);
        if (!_.isEmpty(user_info)) {
          next(G.homePage);
        } else {
          next();
        }
      }
    } else {
      next();
    }
  },
  redirect: G.homePage    //默认重定向到首页
};
let routes = [];
routes.push(indexRoute);
routes = _.union(routes, router.login);
routes = _.union(routes, router._404);

module.exports = routes;
