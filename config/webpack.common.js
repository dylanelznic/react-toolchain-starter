const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  /**
   * Which module webpack should use to begin building out its
   * internal dependency graph
   */
  entry: [paths.src + '/index.jsx'],

  /**
   * Where to emit the bundles webpack creates and how to name
   * the files
   */
  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  /**
   * Plugins used to customize webpack's build process
   */
  plugins: [
    /**
     * Generates an HTML file from a template
     */
    new HtmlWebpackPlugin({
      template: paths.public + '/index.html',
    }),
  ],

  /**
   * Configure how modules are resolved
   */
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  /**
   * Rules for how modules within the project are handled
   */
  module: {
    rules: [
      // Transpile JS and JSX using Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      // Transpile CSS imports
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
