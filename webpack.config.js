const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/js/index.ts`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  // mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      { test: /\.(ts|tsx)$/, exclude: /node_modules/, loader: 'ts-loader' },
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
