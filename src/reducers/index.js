import { combineReducers } from 'redux';
import firstState from './first';
import secondState from './second';
import common from './common';

const rootReducer = combineReducers({
  firstState,
  secondState,
  common
});

export default rootReducer;
