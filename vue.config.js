const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-fabric-editor/'
    : '/',
  transpileDependencies: true,
  lintOnSave:false
})
