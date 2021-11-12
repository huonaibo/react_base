/*
 * @Descripttion: 
 * @version: 
 * @Author: NaiBo
 * @Date: 2021-11-10 16:50:00
 * @LastEditors: NaiBo
 * @LastEditTime: 2021-11-11 20:41:14
 */

const { merge } = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const common = require("./webpack.config")

module.exports = merge(common, {
    mode: "production",
    devtool: 'eval-cheap-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
            ignoreOrder: false,
          }),
    ],
})