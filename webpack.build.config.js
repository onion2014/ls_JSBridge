var path = require('path');

const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'loveshow-JSBridge.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

module.exports = config;