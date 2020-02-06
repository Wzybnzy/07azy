/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578721732141_6601';

  // add your middleware config here
  config.middleware = ['authorization'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security : {
      csrf: false
      // csrf:{
      //   headerName:'aa-token'
      // }
    },
    mysql :{
      // database configuration
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'yq',
      },
      // load into app, default true
      app: true,
      // load into agent, default false
      agent: false,
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
