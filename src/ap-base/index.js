/* ap-system */
const apSystem = require('../../base-ui/ap-system');
const project = require('../project');

// router
let router = apSystem.router;
let projectRouter = project.router;

router.children = _.union(router.children, projectRouter.children);

// store
let store = {
  state: _.extend(apSystem.store.state, project.store.state),
  mutations: _.extend(apSystem.store.mutations, project.store.mutations),
  getters: _.extend(apSystem.store.getters, project.store.getters),
  actions: _.extend(apSystem.store.actions, project.store.actions)
};

module.exports = {
  router,
  store
};
