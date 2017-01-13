import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore ,compose} from 'redux';
import {Provider} from 'react-redux';
import Logger from 'redux-logger';


import App from 'container';
import Counter from './components/Counter/';

import DeskMark from './components/Deskmark';
import rootReducer from './reducers';
import * as actionCreators from './actions';

let initialState = {};
const store= createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(Logger),
		window.devToolsExtension
		?window.devToolsExtension()
		:f=>f
	)
);
const rootElemtn = document.getElementById('example');

function render() {
	const state = store.getState();
	React.render(
		<App state={state}/>,
		rootElemtn,
		function(){
			console.log(初次渲染成功);
		}
	)
}

store.subscribe(render)
render();

/*const logger = createLogger();

const store = createStore(reducer,applyMiddleware(logger));
const rootElement = document.getElementById('example');

const render = () => ReactDOM.render(
	<Counter
		value={store.getState().counter}
		onIncrement={() => store.dispatch({ type: 'INCREMENT',text:'user redux'+store.getState().counter})}
		onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
	/>,
  	rootElement,
	function(){
		console.log(store.getState(),'render')
	}
)

render();
store.subscribe(render);
console.log(store.getState(),'star')*/
