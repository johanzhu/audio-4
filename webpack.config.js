var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  target: 'node',
  entry: [
  	'./src/main.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/'
  },
  resolve: {
        alias: {
            assets: path.resolve(__dirname, 'public')
        }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })*/
  ]
};