module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:7001/",
        changeOrigen: true,
        pathRewrite: { "^/api": "" }
      }
    }
  }
}