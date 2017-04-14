const BundleTracker = require('webpack-bundle-tracker');
const path = require('path');


module.exports = {
  context: __dirname,
  entry: './assets/js/index',
  output: {
    path: path.resolve('./assets/bundles/'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ],
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
