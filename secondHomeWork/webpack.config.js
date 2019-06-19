var path = require("path");

module.exports = {
  mode: 'development',
  entry: './modules/board.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  }
}