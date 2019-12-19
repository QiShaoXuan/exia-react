const path = require('path')

const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

module.exports = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'), // html模板的生成路径
      template: path.resolve(__dirname, '../src/index.html'), //html模板
      inject: true, // true：默认值，script标签位于html文件的 body 底部
      hash: true, // 在打包的资源插入html会加上hash
      //  html 文件进行压缩
      minify: {
        removeComments: true, //去注释
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes: true, //去除属性引用
      },
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
  ],
})
