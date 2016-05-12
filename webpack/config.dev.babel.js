import webpack from 'webpack';
import path from 'path';
import ip from 'ip';
import { HOT_RELOAD_PORT, SRC_DIR, BUILD_DIR } from './constants';

export default {
  hotPort: HOT_RELOAD_PORT,
  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: { app: [
    `webpack-hot-middleware/client?path=http://${ip.address()}:${HOT_RELOAD_PORT}/__webpack_hmr`,
    path.join(SRC_DIR, 'client/index.js'),
  ] },
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
      loader: 'style-loader!css-loader!less-loader',
    }],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `http://${ip.address()}:${HOT_RELOAD_PORT}/build/`,
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['src', 'node_modules'],
  },
};
