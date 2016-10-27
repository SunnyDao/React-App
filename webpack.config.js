var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: {
		index:[
			"webpack/hot/only-dev-server",
			"webpack-dev-server/client?http://localhost:8080",
			path.resolve(__dirname, 'app/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js",
		publicPath: 'http://localhost:8080/'
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				exclude:/(node_modules|example)/,
				loaders:['babel']
			},{
				test:/.less$/, 
				loaders:['style','css','less']
			}
		]
	},
	resolve:{
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title:'hello react',
			template:path.resolve(__dirname, 'app/index.html')
		})
	]
};

module.exports = config;