import axios from 'axios';
// import * as actions from './actions/formActions';

export function makeRequest(params, then, error) {
  axios(params).then((result) => {
    if (then) then(result);
  }).catch((r) => {
    if (error) error(r);
  });
}

export const createUser = (dispatcher, data1) => {
  const url = 'http://mhk.onsib.ru/api/v1/user/';

  const data = {
    email: 'user44@user.ru',
    password: 'so44me_pwd',
  };

  const method = 'post';

  makeRequest(
    { url, data, method },
    response => {
      console.log('response', response);
    },
    error => {console.log('error', error)
      //handle error
    }
  );
};

export const signIn = (dispatcher, data1) => {
  const url = 'http://mhk.onsib.ru/api/v1/login';

  const data = {
    email: 'user44@user.ru',
    password: 'so44me_pwd',
  };

  const method = 'post';

  makeRequest(
    { url, data, method },
    response => {//
      console.log('response', response)
    },
    error => {console.log('error', error)
      //handle error
    }
  );
};

export const confirmAuth = (dispatcher, data1) => {
  const url = 'http://mhk.onsib.ru/api/v1/auth';

  const method = 'get';

  makeRequest(
    { url,},
    response => {
      console.log('response', response);
    },
    error => {console.log('error', error);
      //handle error
    }
  );
};
