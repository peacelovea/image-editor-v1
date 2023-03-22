const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : './',
  transpileDependencies: true,
  lintOnSave:false,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '设计编辑器'
      return args
    })
  }
});
