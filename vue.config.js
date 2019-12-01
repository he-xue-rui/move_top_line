module.exports = {
  lintOnSave: true,
  devServer: {
    open: true
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          blue: '#3296fa'
        }
      }
    }
  }
}
