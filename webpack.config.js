module.exports = {
    // ... other configuration options ...
    module: {
      rules: [
        // ... other rules ...
        {
          test: /\.(svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/icons/'
              }
            }
          ]
        }
      ]
    }
  };
  