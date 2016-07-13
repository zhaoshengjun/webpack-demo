const webpack = require('webpack');
exports.devServer = function (options) {
  return {
    //This is purly to solve some wired issue on Windows, Ubuntu and Vagrant  
    // watchOptions: {
    //   aggregateTimeout: 300,
    //   poll: 1000
    // },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({multiStep: true})
    ]
  }
}
exports.setupCSS = function (paths) {
  return {
    module: {
      loaders: [
        {test:/\.css$/, loaders:['style','css?modules'], include: paths}
      ]
    }
  }
}

exports.minify = function () {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
          warnings: false,
          drop_console: true
        }
      })
    ]
  }
}


exports.setFreeVariable = function (key, value) {
  const env = {};
  env[key] = JSON.stringify(value);
  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  }
}