var webpack = require("webpack");
var path = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: [path.join(__dirname, "client", "reduxtagram.js")],
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    modules: [path.resolve(__dirname, "client"), "node_modules"],
  },
  devServer: {
    contentBase: path.join(__dirname, "client"),
    disableHostCheck: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "client", "index.html"),
    }),
  ],
};
