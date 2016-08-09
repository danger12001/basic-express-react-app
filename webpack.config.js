var webpack = require('webpack');
var path = require('path');
var babel = require('babel-loader');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/js/');
var APP_DIR = path.resolve(__dirname, 'src/js/');

var config = {


  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  },
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  }
};

module.exports = config;
