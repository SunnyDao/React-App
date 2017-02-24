var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app')

var config = {
	entry:{
		index:[
			'webpack-hot-middleware/client',
			path.resolve(__dirname, 'app/index.js')
		],
		common:['react','react-dom','redux']
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].js',
		publicPath:'/build/'
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
		extensions: ['', '.js', '.jsx'],
		root: APP_PATH
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),//模块热替换
		new webpack.NoErrorsPlugin(),//错误不打断编译
		new webpack.optimize.CommonsChunkPlugin("common","common.bundle.js"),//提取模块公共
		new HtmlWebpackPlugin({
			title:'hello react',
			template:'./app/index.html'
		}),//生成html文件
		new OpenBrowserPlugin({ url: 'http://localhost:3000' })//浏览器打开
    ]
}

module.exports = config;