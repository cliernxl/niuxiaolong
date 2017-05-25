import Vue from 'vue';
import Directives from 'directives';
import MessageBox from 'components/messageBox';
import Alerts from 'components/alerts';
import Element from 'element-ui';
import Filters from 'filters';     //注册过滤器
Vue.use(Element);     //使用Element-ui
Vue.use(Directives);  //使用指令插件
Vue.use(MessageBox);  //注册消息组件
Vue.use(Alerts);      //注册alert组件
Vue.use(Filters);     //使用过滤器插件


//解决IE9跨域问题
jQuery.support.cors = true;

/* 是否为生产环境 */
const isProductionEnv = (_config_.env === "production");

/*
 * Vue 所有的日志与警告。
 * 开发环境、测试环境: 打印日志
 * 生产环境: 不打印日志
 */
Vue.config.silent = !isProductionEnv;

/*
 * Vue 开发调试。
 * 开发环境、测试环境: 打印日志
 * 生产环境: 不打印日志
 */
Vue.config.devtools = !isProductionEnv;
