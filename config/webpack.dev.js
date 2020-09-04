const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const paths = require("./paths.js");

module.exports = merge(common, {
  /**
   * Mode (development or production)
   */
  mode: "development",

  /**
   * How source maps are generated
   */
  devtool: "eval-source-map",

  /**
   * Configuration for the dev server
   */
  devServer: {
    contentBase: paths.dist,
    port: 3000,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },

  /**
   * Plugins used to customize webpack's build process
   */
  plugins: [
    // Module Replacement (HMR) exchanges, adds, or removes modules
    // while an application is running, without a full reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
