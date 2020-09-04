const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = {
  /**
   * Which module webpack should use to begin building out its
   * internal dependency graph
   */
  entry: [paths.src + "/index.js"],

  /**
   * Where to emit the bundles webpack creates and how to name
   * the files
   */
  output: {
    path: paths.dist,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  /**
   * Plugins used to customize webpack's build process
   */
  plugins: [
    /**
     * Generates an HTML file from a template
     */
    new HtmlWebpackPlugin({
      template: paths.public + "/index.html",
    }),
  ],

  /**
   * Rules for how modules within the project are handled
   */
  module: {
    rules: [
      // Transpile JS and JSX using Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      // Transpile CSS imports
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
