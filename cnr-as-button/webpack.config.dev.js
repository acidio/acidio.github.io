var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractSASS = new ExtractTextPlugin('cnr-as-button-demo-page.min.css')

module.exports = {
  devtool: 'eval',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    // 'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'cnr-as-button-demo-page.min.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    extractSASS
  ],
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: [ '', '.json', '.js' ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [ 'babel-loader', 'eslint' ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/i,
        loader: extractSASS.extract(['css-loader?minimize','sass-loader'])
      }
    ]
  }
};
