const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        publicPath: '/', //The bundled files will be available in the browser under this path.
        hot: true, // reload page if set to false
        inline: true, // uses iframe when false
        historyApiFallback: true
    },
    mode: "development",
    devtool: "source-map",
    watch: false, // working only for html files. Changes in other files will break it.
    entry: {
        main: [
            "webpack-hot-middleware/client?reload=true", // reload=true, works only when HMR cannot update the page
            "./src/index.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"), // __dirname or process.cwd (current working directory),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                }
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './assets/index.html'
        })
    ]
}