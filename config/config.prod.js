/* eslint valid-jsdoc: "off" */

'use strict';

module.exports = () => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.logger = {
    dir: '/data/logs/nodejs',
  };

  return {
    ...config,
  };
};
