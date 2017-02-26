const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const config = require('./webpack.prod');

const app = new express();
const port = 8080;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { 
	noInfo: true, 
	stats: { colors: true },
	publicPath: config.output.publicPath,
	contentBase:'app/'
}));
app.use(webpackHotMiddleware(compiler));

app.get("/", function(req, res) {
  	res.sendFile(__dirname + '/app/index.html')
});

app.listen(port, function(error) {
	if (error) {
		console.error(error)
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
	}
});