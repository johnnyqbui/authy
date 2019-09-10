const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const mode = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

module.exports = {
  mode,
  entry: {
    main: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: 'babel-loader',
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3000,
    publicPath: '/',
    historyApiFallback: { index: '/' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.html',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
