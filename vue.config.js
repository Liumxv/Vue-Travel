const path = require('path')
const appData = require('./data.json')
const index = appData.index
const city = appData.city
const detail = appData.detail

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': '@/assets/styles'
      }
    }
  },
  devServer: {
    before (app, server) {
      app.get('/api/index', (req, res) => {
        res.json({
          errno: 0,
          data: index
        })
      })
    }
  }
}