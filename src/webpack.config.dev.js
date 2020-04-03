const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  target: 'web',
  devTool: 'cheap-module-source-map',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    stats: 'minimul',
    overlay: true,
    historyApiFallbacks: true,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  modules: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        user: ["bable-loader"]
      },
      {
        test: /(\.css)$/,
        user: ['style-loader', 'css-loader']
      }
    ]
  }

}