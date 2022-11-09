const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
  ],
  devServer: {
    static: {
      // match the output path
      directory: path.resolve(__dirname, "dist"),
      //match the output 'publicPath'
      publicPath: "/",
    },
    headers: { "Access-Control-Allow-Origin": "*" },
    // proxy is required in order to make api calls to express server while using hot-reload webpack server
    // routes api fetch requests from localhost:8080/demo/*(webpack dev server) to localhost:3000/api/* (where our Express server is running)
    proxy: {
      "/demo/*": {
        target: "http://localhost:3000/",
        secure: false,
      },
    },
    // Required for Docker to work with dev server
    host: "0.0.0.0",
    compress: true,
    port: 8080,
    hot: true,
  },
  devtool: "eval-source-map",
};
