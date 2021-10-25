const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExctractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: { chunks: 'all'}
  };
  
  if (isProd) config.minimizer = [
    new OptimizeCssAssetsWebpackPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', {discardComments: {removeAll: true}}]
      }
    }),
    new TerserWebpackPlugin()
  ]
  
  return config;
}

const cssLoaders = (extra) => {
  const loaders = [{
    loader: MiniCssExctractPlugin.loader,
    options: {publicPath: ''}
  }, 'css-loader']

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
}

const pluginsSet = () => {
  const plugins = [
    new htmlWebpackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
          patterns: [{
            from: path.resolve(__dirname, 'src/favicon.png'),
            to: path.resolve(__dirname, 'dist')
          }]
        }),
    new MiniCssExctractPlugin({
      filename: fileName('css')
    }),
  ]

  if (isDev) {}
  if (isProd) {}

  return plugins;
}

const babelOptions = (preset) => {
  const options = {
    presets: ['@babel/preset-env']
  };

  if (preset) {
    options.presets.push(preset)
  }

  return options;
}

const jsLoaders = () => {
  const loaders = [{
    loader: "babel-loader",
    options: babelOptions()
  }]

  if (isDev) {}
  
  return loaders;
}

const fileName = (ext) => isDev ? `[name].${ext}`: `[name].[fullhash].${ext}`;

module.exports = {
  path, isDev, isProd, optimization, cssLoaders, pluginsSet, babelOptions, jsLoaders,
  fileName
}