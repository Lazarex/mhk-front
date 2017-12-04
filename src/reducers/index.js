// Set up your root reducer here...
import { combineReducers } from 'redux';
import homePageReducer from './HomePageReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  homePage: homePageReducer,
  routing: routerReducer
});

export default rootReducer;
