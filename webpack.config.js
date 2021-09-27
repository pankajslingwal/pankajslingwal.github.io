const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['core-js/stable', path.join(__dirname, "app", "index.js")],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'main.js',
    chunkFormat: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: [/node_modules/, /public/, /styleguide/, /coverage/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.?scss$/,
        exclude: [/node_modules/, /public/, /styleguide/, /coverage/],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            },
          }]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  target: ['es5']
}