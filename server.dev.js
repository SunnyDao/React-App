/*server.js */
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const isDeveloping = true;
const port = 8080;

function baseConfig(config, contentBase) {
	return new webpackDevServer(webpack(config), {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		contentBase: contentBase,
		stats: { colors: true } // 用颜色标识
	});
}

let server;
if(isDeveloping) {
	server = baseConfig(config, "app/");
	console.log("development mode...");
}

server.listen(port, "localhost", function(err) {
	if(err) {
		console.log(err);
	}
	console.log('Listening at localhost:'+port+'...');
});