module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-1'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
