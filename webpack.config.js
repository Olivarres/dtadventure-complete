var path = require('path')

module.exports = {
  context: __dirname + path.sep + 'app',
  entry: './index.js',

  output: {
    path: __dirname + path.sep + 'app',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }

}