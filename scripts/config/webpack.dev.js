/*
 * @Descripttion: 
 * @version: 
 * @Author: NaiBo
 * @Date: 2021-11-10 16:48:11
 * @LastEditors: NaiBo
 * @LastEditTime: 2021-11-10 18:00:19
 */

const { merge } = require("webpack-merge")
const common = require("./webpack.config")
const { SERVER_HOST, SERVER_PORT } = require("../constant")
module.exports = merge(common, {
    mode: "development",
    devtool: 'eval-source-map',
    devServer: {
        host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
        port: SERVER_PORT, // 指定端口，默认是8080
        compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新
    },
})