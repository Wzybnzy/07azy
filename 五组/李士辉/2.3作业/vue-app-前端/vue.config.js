module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:7001',  // 代理到目标地址
                changeOrigin:true,  // 允许跨域
                pathRewrite:{'^/api':''}
            }
        }
    }
}