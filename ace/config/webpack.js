"use strict";

module.exports = {
  entry: './src/js/main.js',
  output: {
      filename: 'main.js'
  },
  resolve: {
      root: __dirname + '/src/js',
  },
  module: {
      loaders: [{
          test:     /\.js$/,
          exclude:  /node_modules/,
          loader:  'babel-loader'
      }, {
          test:     /\.jsx/,
          loader: 'jsx'
      }]
  }
}
