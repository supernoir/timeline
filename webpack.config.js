var webpack = require('webpack');

module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
