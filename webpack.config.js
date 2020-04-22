const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
  	rules: [
  		{
  			test: /\.m?js$/,
  			exclude: /node_modules/,
  			use: [
  				{
  					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
  				}
  			]
  		}
  	]
  }
}