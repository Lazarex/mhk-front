import * as types from '../constants/actionTypes';

export function setLoginError(loginError) {
  return {
    type: types.SET_LOGIN_ERROR,
    loginError
  };
}

export function setLoginSuccess(loginSuccess) {
  return {
    type: types.SET_LOGIN_SUCCESS,
    loginSuccess
  };
}

export function setRegistrationError(registrationError) {
  return {
    type: types.SET_REGISTRATION_ERROR,
    registrationError
  };
}


export function setRegistrationSuccess(registrationSuccess) {
  return {
    type: types.SET_REGISTRATION_SUCCESS,
    registrationSuccess
  };
}

