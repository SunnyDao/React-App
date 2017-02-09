import {combineReducers} from 'redux';
import article from './artPage';
import counter from './counter';

const rootReducer = combineReducers({
    article,
  	counter
});

export default rootReducer;


