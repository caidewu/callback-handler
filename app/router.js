'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/callbackView', controller.callback.index);
  router.post('/callback', controller.callback.handle);
};
