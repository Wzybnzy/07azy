'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mysql : {//开启数据库插件
    enable: true,
    package: 'egg-mysql',
  },
  validate:{//开启表单校验插件
    enable:true,
    package:'egg-validate'
  }
};
