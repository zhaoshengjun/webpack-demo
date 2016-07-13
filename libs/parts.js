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