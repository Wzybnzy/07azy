module.exports={
    lintOnSave:false,
    devServer:{
      proxy:{
        "/api":{
          target:"http://localhost:7001/",//目标地址
          changeOrigin:true,//允许跨域
          pathRewrite:{"^/api" : ""}//所有以/api开头的替换成空
        }
      }
    }
  }