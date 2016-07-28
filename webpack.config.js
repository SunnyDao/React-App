var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry:[/*
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',*/
		path.resolve(__dirname, 'app/index.js')
	],
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js',
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				loaders:['babel'],
				exclude:/(node_modules|example)/
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
		//new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js"),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title:'hello react'
		}),
		//new OpenBrowserPlugin({ url: 'http://localhost:8080/' })
    ]/*,
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	}*/
}

module.exports = config;