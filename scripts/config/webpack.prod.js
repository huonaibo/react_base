/*
 * @Descripttion: 
 * @version: 
 * @Author: NaiBo
 * @Date: 2021-11-10 16:50:00
 * @LastEditors: NaiBo
 * @LastEditTime: 2021-11-10 17:23:43
 */

const { merge } = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const common = require("./webpack.config")

module.exports = merge(common, {
    mode: "production",
    devtool: 'eval-cheap-source-map',
    plugins: [
        new CleanWebpackPlugin(),
    ],
})