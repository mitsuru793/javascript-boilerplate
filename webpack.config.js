const path = require('path')

const basePath = __dirname

module.exports = {
  mode: 'development',
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js']
  },
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(basePath, 'dist')
  }
}
