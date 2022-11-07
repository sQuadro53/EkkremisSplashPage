const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js', 
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
   devServer: {
    static: {
      directory: path.join(__dirname, '/client'),
    },
    proxy: {
      '/demo': 'http://localhost:3000',
    },
    compress: true,
    port: 8080,
  },
  devtool: 'inline-source-map',
};