import { combineReducers } from 'redux';
import firstState from './first';
import secondState from './second';

const rootReducer = combineReducers({
  firstState,
  secondState
});

export default rootReducer;
