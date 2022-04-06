const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        extractComments: false,
      }), 
      new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false,
        },
      },
    })
  ],
  }
});