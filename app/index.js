import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators,applyMiddleware, createStore ,compose} from 'redux';
import {Provider,connect} from 'react-redux';
import Logger from 'redux-logger';

import rootReducer from 'reducers/artPage';
import * as actionCreators from 'actions/artPage';
import App from './containers/art';

const store = createStore(rootReducer);
const rootElemtn = document.getElementById('example');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElemtn,
	function(){
		console.log('初次渲染成功');
	}
)
//store.subscribe(render);
