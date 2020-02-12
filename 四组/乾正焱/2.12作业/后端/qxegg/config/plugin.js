'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 开启MySQL，validate插件
  mysql:{
    enable:true,
    package:"egg-mysql"
  },
  validate:{
    enable:true,
    package:"egg-validate"
  }
};
