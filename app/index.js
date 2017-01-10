import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';

import Counter from './components/Counter/';

import DeskMark from './components/Deskmark';
import rootReducer from './reducers';
import * as actionCreators from 'actions';



ReactDOM.render(
	<DeskMark />,
	document.getElementById('example'),
	()=>{
		console.log('111')
	}
)
function render() {
	const state = store.getState();
}

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
