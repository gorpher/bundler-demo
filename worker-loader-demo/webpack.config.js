const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/App.js'
    },
    mode: 'production',
    output: {
        filename: './main.js',
        globalObject: 'this'
        // filename: '[name].[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: { loader: "worker-loader" },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' // 模版文件
        }),
    ],
    devServer: {
        contentBase: './dist',
    },
};
