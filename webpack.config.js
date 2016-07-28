var path = require('path');
var webpack = require('webpack');

var config = {
	entry:[
		path.resolve(__dirname, 'app/index.js')
	],
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js',
		publicPath: "/"
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				loaders:['babel'],
				exclude:/(node_modules|test)/
			},
			{
				test:/.less$/,
				loaders:['style','css','less']
			}
		]
	},
	resolve:{
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;