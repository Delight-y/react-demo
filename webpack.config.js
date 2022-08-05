const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 拆分css 以外链方式引入到header中

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
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                use: 'ts-loader',
                include: /src/, 
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                // css-loader对css文件进行合并处理等 
                // style-loader用于处理的css文件以style标签的形式嵌入到html页面中
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    plugins: [
        // 将bundle.js自动挂载到index.html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'), // 要挂载的模板文件
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', // filename打包的是同步代码
            chunkFilename: '[id].css', // 异步代码
        }),
    ],
    // 配置模块如何解析 便于开发
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@styles': path.resolve(__dirname, './src/styles'),
        },
        extensions: ['.tsx', '.js', '.jsx'], // 自动解析的扩展 用户在使用时可以不用带扩展名eg: import file from @/to/file
    },
}