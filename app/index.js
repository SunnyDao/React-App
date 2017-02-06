import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from 'containers/Index';
import configStore from 'store/configStore';


const store = configStore();
const rootElement = document.getElementById('example');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement,
	function(){
		console.log('初次渲染成功');
	}
)
