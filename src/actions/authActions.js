import * as types from '../constants/actionTypes';

export function setSignInError(signInError) {
  return {
    type: types.SET_SIGN_IN_ERROR,
    signInError
  };
}

export function setSignUpError(signUpError) {
  return {
    type: types.SET_SIGN_UP_ERROR,
    signUpError
  };
}

export function setSignInSuccess(signInSuccess) {
  return {
    type: types.SET_SIGN_IN_SUCCESS,
    signInSuccess
  };
}

export function setSignUpSuccess(signUpSuccess) {
  return {
    type: types.SET_SIGN_UP_SUCCESS,
    signUpSuccess
  };
}

