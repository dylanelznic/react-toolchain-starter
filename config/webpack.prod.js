const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  /**
   * Mode (development or production)
   */
  mode: 'production',

  /**
   * How source maps are generated
   */
  devtool: false,

  /**
   * Where to emit the bundles webpack creates and how to name
   * the files
   */
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: '[name].[contenthash].bundle.js',
  },

  /**
   * Plugins used to customize webpack's build process
   */
  plugins: [],

  /**
   * Optimize for production
   */
  optimization: {
    runtimeChunk: 'single',
  },

  /**
   * Controls how webpack notifies us of assets and entry points that exceed a
   * specific file limit
   */
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
