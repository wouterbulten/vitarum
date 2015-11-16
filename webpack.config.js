var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [

    //Add babel polyfill to the final build
    'babel-polyfill',

    //'./src/theme/main.less',

    //Application entry point
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',

      //Build to app.js
      filename: 'app.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        //Only parse js files
        test: /\.js$/,

        //Find all files in the src directory
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',

        //Read pretets from .babelrc
        /*query: {
          presets: ['es2015']
        }*/
      },
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
    ]
  },
  devServer: {
    contentBase: "./src"
  }
};
