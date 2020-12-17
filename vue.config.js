module.exports = {
  transpileDependencies: ['vant'], //编译依赖
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 192,
            minPixelValue: 2,
            propList: ['*']
          })
        ]
      }
    }
  }
};
