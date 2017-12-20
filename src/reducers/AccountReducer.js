import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_LOGIN_ERROR:
      return objectAssign({}, state, {loginError: action.loginError});

    case types.SET_LOGIN_SUCCESS:
      return objectAssign({}, state, {loginSuccess: action.loginSuccess});

    case types.SET_REGISTRATION_ERROR:
      return objectAssign({}, state, {registrationError: action.registrationError});

    case types.SET_REGISTRATION_SUCCESS:
      return objectAssign({}, state, {registrationSuccess: action.registrationSuccess});

    default:
      return state;
  }
}
