import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter/';
import reducer from './reducers/index';

const store = createStore(reducer);
const rootElement = document.getElementById('example');

const render = () => ReactDOM.render(
  <Counter
    value={store.getState().counter}
    onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
  />,
  rootElement
)

render();
store.subscribe(render);

store.dispatch({
  type: 'INCREMENT'
})
console.log(store.getState())
