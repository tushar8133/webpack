const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    devtool: "source-map",
    watch: false, // working only for html files. Changes in other files will break it.
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"), // __dirname or process.cwd (current working directory)
        filename: "[name]-bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }]
        }, {
            test: /\.(jpg|gif|png|svg)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: "images/[name].[ext]"
                }
            }
        }, {
            test: /\.html$/,
            use: {
                loader: "html-loader"
            }
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ]
}