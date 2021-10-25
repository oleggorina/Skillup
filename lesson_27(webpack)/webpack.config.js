const {path,isDev, isProd, optimization, cssLoaders, pluginsSet, 
  babelOptions, jsLoaders, fileName} = require ('./webpack-base.config');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    stat: './statistics.ts'
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: fileName('js'),
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@model': path.resolve(__dirname, 'src/model'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: false
  },
  devtool: isDev ? 'source-map': false,
  plugins: pluginsSet(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions('@babel/preset-typescript')
        }
      },
      {
      test: /\.css$/,
      use: cssLoaders()
    },
    {
      test: /\.s[ac]ss$/,
      use: cssLoaders('sass-loader')
    },
    {
      test: /\.(png|jpq|jpeg|svg|gif|webp)$/,
      type: 'asset/resource'
    },
    {
      test: /\.(ttf|woff|woff2|eot)$/,
      type: 'asset/resource'
    },
    {
      test: /\.xml$/,
      use: ['xml-loader']
    },
    {
      test: /\.csv$/,
      use: ['csv-loader']
    }
  ]
  }
};