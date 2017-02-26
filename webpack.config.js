var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app')

var config = {
	devtool:'source-map',
	entry: {
		vendor:['react','react-dom','redux'],
		index:[
			"webpack/hot/only-dev-server",
			"webpack-dev-server/client?http://localhost:8080",
			path.resolve(__dirname, 'app/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "[name].js",
		publicPath: '/static/'
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
		extensions: ['', '.js', '.jsx'],
		root: APP_PATH
	},
	plugins: [
		//HMR热加载
		new webpack.HotModuleReplacementPlugin(),
		//错误不打断编译
		new webpack.NoErrorsPlugin(),
		//提取模块公共
		new webpack.optimize.CommonsChunkPlugin("vendor","common.bundle.js"),
		//生成HTML代码
		new HtmlWebpackPlugin({
			title:'hello react',
			template:path.resolve(__dirname, 'app/index.html')
		}),
		//浏览器打开
		new OpenBrowserPlugin({ url: 'http://localhost:8080' })//浏览器打开
	]
};

module.exports = config;