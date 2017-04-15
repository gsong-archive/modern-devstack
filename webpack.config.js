const BundleTracker = require("webpack-bundle-tracker");
const webpack = require("webpack");
const { resolve } = require("path");

module.exports = {
  context: resolve(__dirname, "src"),

  entry: [
    "react-hot-loader/patch",
    // activate HMR for React

    "webpack-dev-server/client?http://localhost:8080",
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    "webpack/hot/only-dev-server",
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    "./index.js"
    // the entry point of our app
  ],
  output: {
    filename: "[name]-[hash].js",
    // the output bundle

    path: resolve(__dirname, "dist"),

    publicPath: "http://localhost:8080/"
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: "eval",

  devServer: {
    host: "0.0.0.0",

    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, "dist"),
    // match the output path

    publicPath: "/"
    // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules"]
      }
    ]
  },

  plugins: [
    new BundleTracker({ filename: "./webpack-stats.json" }),

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ]
};
