const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /^(?!.*\.spec\.js$).*\.js$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /^(?!.*\.spec\.js$).*\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|mp4|mp3)$/,
        loaders: ['file-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader?sourceMap=inline'
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3500
  }
};
