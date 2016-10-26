var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: ["app/index.js"],
	output: {
		path: __dirname+"/dist",
		filename: "bundle.js"
	}
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				loaders:['babel'],
				include:path.resolve(__dirname, 'app/')
			}
		]
	},
	resolve:{
		extensions: ['', '.js', '.jsx']
	},
	plugins: []
}

module.exports = config;