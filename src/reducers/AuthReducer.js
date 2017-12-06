import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SIGN_IN_ERROR:
      return objectAssign({}, state, {signInError: action.signInError});

    case types.SET_SIGN_UP_ERROR:
      return objectAssign({}, state, {signUpError: action.signUpError});

    case types.SET_SIGN_IN_SUCCESS:
      return objectAssign({}, state, {signInSuccess: action.signInSuccess});

    case types.SET_SIGN_UP_SUCCESS:
      return objectAssign({}, state, {signUpSuccess: action.signUpSuccess});

    default:
      return state;
  }
}
