// Set up your root reducer here...
import { combineReducers } from 'redux';
import AccountReducer from './AccountReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  account: AccountReducer,
  routing: routerReducer
});

export default rootReducer;
