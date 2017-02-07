import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configStore from 'store/configStore';
import getRoutes from 'router';

const initialState = {};
const store = configStore(initialState);
const rootElement = document.getElementById('example');

const routes = getRoutes();
const history = browserHistory;

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			{routes}
		</Router>
	</Provider>,
	rootElement,
	function(){
		console.log('初次渲染成功');
	}
)
