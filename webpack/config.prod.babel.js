import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { SRC_DIR, BUILD_DIR } from './constants';

export default {
  cache: false,
  debug: false,
  entry: { app: [path.join(SRC_DIR, 'client/index.js')] },
  module: {
    loaders: [{
      loader: 'url-loader?limit=10000',
      test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg|wav)$/,
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react'],
      },
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
    }],
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/build/',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new ExtractTextPlugin('app-[hash].css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ],
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['src', 'node_modules'],
  },
};
