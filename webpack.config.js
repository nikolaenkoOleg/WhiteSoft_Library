/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/js/index.ts`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.(sass|scss|css)$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
    }),
  ],
  devServer: {
    port: 7700,
    historyApiFallback: true,
  },
};
