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
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 1,
                        }
                      },
                    "postcss-loader",
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
