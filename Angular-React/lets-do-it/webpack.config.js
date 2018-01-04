const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      state: path.resolve(__dirname, './src/state/')
    }
  },
  devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'source-map',
  output: { path: path.resolve(__dirname, 'dist'), publicPath: '/', filename: 'app.bundle.[hash].js' },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', },
      {
        test: /\.(scss|css)$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'resolve-url-loader' },
            { loader: 'sass-loader', options: { includePaths: ['./src/styles'], sourceMap: true } }
          ],
          fallback: 'style-loader'
        })
      },
      { test: /\.html$/, use: [{ loader: 'raw-loader' }] },
      { test: /\.(jpg|gif|png|mp4|svg)$/, use: [{ loader: 'file-loader' }] },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    new HtmlWebpackPlugin({ template: './public/index.ejs' }),
    extractSass
  ],
  devServer: {
    host: '0.0.0.0',
    port: '4000',
    historyApiFallback: true,
    disableHostCheck: true
  }
};
