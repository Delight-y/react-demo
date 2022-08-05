const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development", // 默认开发环境
    entry: path.resolve(__dirname, './src/index.tsx'), // 入口文件\
    // 打包出口文件
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[contenthash:8].bundle.js',
        // webpack5支持clean属性配置 不需要再去依赖其他plugin配置
        clean: true, // 清除掉之前的bundle 
    },
    devServer: {
        port: 9090,
        hot: true, // 本地开发热更新 代码更改后自动重新编译
    },
    plugins: [
        
    ]
}