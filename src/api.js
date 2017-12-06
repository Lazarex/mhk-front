import axios from 'axios';
import * as authActions from './actions/authActions';
import { push } from 'react-router-redux';

export function makeRequest(params, then, error) {
  axios(params).then((result) => {
    if (then) then(result);
  }).catch((r) => {
    if (error) error(r);
  });
}

export const signUp = (dispatcher, data) => {
  const url = 'http://mhk.onsib.ru/api/v1/user/';

  const method = 'post';

  makeRequest(
    { url, data, method },
    response => {
      // localStorage.setItem('JWT', response.data);
      // dispatcher(push('/'));
      // console.log('re', response.data)



      dispatcher(authActions.setSignUpSuccess(true)); // refactor
      dispatcher(authActions.setSignUpError(false));
    },
    () => {
      dispatcher(authActions.setSignUpError(true));
    }
  );
};

export const signIn = (dispatcher, data) => {
  const url = 'http://mhk.onsib.ru/api/v1/login';

  const method = 'post';

  makeRequest(
    { url, data, method },
    response => {
      try {
        const payload = JSON.parse(atob(response.data.match(/\.([^.]+)\./)[1]));

        localStorage.setItem('JWT', response.data);
        localStorage.setItem('email', payload.email);

        dispatcher(push('/'));
        dispatcher(authActions.setSignInError(false)); // ?
      } catch (err) {//
        console.log(err)
        dispatcher(authActions.setSignInError(true));
      }
    },
    () => {
      dispatcher(authActions.setSignInError(true));
    }
  );
};

export const confirmAuth = (dispatcher, token) => {
  const url = 'http://mhk.onsib.ru/api/v1/auth';

  const method = 'get';

  const headers = {
    Authorization: `JWT ${token}`
  };

  makeRequest(
    { url, method, headers },
    response => {
      console.log('response', response);
    },
    error => {console.log('error', error);
      //handle error
    }
  );
};
