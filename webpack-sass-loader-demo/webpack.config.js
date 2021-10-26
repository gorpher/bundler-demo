const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        main: './src/App.js'
    },
    mode: 'production',
    output: {
        filename: './main.js',
        // filename: '[name].[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    // MiniCssExtractPlugin.loader,
                    // "style-loader",
                    process.env.NODE_ENV !== "production"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    // 将 CSS 转化成 CommonJS 模块
                    "css-loader",
                    // 将 Sass 编译成 CSS
                    "sass-loader",
                    // extract-loader提取样式表,一般提取css样式使用,这里请把它注释掉
                    // "extract-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' // 模版文件
        }),
        new MiniCssExtractPlugin({
            // 与 webpackOptions.output 中的选项相似
            // 所有的选项都是可选的
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    devServer: {
        contentBase: './dist',
    },
};
