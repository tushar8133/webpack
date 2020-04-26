const path = require('path');
const express = require('express');
const app = express();

const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, config.devServer));
app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static("./src"));

app.listen(3000, () => console.log('Example app listening on port 3000\nWait for webpack...'));
