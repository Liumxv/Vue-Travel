// vue.config.js
// const path = require('path')
// module.exports = {
//   publicPath: './',
//   configureWebpack: (config) => {
//     if (process.env.NODE_ENV === 'production') {
//       // 为生产环境修改配置...
//       config.mode = 'production'
//     } else {
//       // 为开发环境修改配置...
//       config.mode = 'development'
//     }
//     resolve: {
//       alias: {
        
//       } // 别名配置
//     }
//   }
// }
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': '@/assets/styles'
      }
    }
  },
}