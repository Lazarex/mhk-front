// Set up your root reducer here...
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  auth: AuthReducer,
  routing: routerReducer
});

export default rootReducer;
