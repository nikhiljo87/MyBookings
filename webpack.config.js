//webpack.config.js
var path = require('path');
module.exports = {
 mode: 'development',
 entry: './ui-react/src/',
 output: {
  path: path.join(__dirname, 'ui-react'),
  filename: 'bundle.js'
 },
 module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
          }
        }
    ]
  }
}