/**
 * 项目本地资源配置
 */
var localResources = [];
localResources = _.union(localResources, require('../../../base-ui/ap-system/local-resources'));
localResources = _.union(localResources, require('../../project/local-resources'));

module.exports = localResources;
