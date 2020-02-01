const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
      rules: [
          {
              include: path.resolve(__dirname, "src")
          }
      ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};