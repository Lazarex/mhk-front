import axios from 'axios';
import * as accountActions from './actions/accountActions';

export function makeRequest(params, then, error) {
  axios(params).then((result) => {
    if (then) then(result);
  }).catch((r) => {
    if (error) error(r);
  });
}

export const registration = (dispatcher, data) => {
  const url = 'http://mhk.onsib.ru/api/v1/user/';

  const method = 'post';

  makeRequest(
    { url, data, method },
    (response) => {
      dispatcher(accountActions.setRegistrationSuccess(true)); // refactor
      dispatcher(accountActions.setRegistrationError(false));

      setTimeout(function () {
        login(dispatcher, data);
      }, 100)
    },
    () => {
      dispatcher(accountActions.setRegistrationError(true));
    }
  );
};

export const login = (dispatcher, data) => {
  const url = 'http://mhk.onsib.ru/api/v1/login';

  const method = 'post';

  console.log('data', data)

  makeRequest(
    { url, data, method },
    response => {
      try {
        const payload = JSON.parse(atob(response.data.match(/\.([^.]+)\./)[1]));

        localStorage.setItem('JWT', response.data);
        localStorage.setItem('email', payload.email);

        dispatcher(accountActions.setLoginSuccess(payload.email));
        dispatcher(accountActions.setLoginError(false)); // ?
      } catch (err) {
        console.log(err)
        dispatcher(accountActions.setLoginError(true));
      }
    },
    () => {
      dispatcher(accountActions.setLoginError(true));
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

export const editProfile = (dispatcher, data) => {
  const url = 'http://mhk.onsib.ru/api/v1/user/profile';

  const method = 'post';

  makeRequest(
    { url, data, method },
    response => {
      console.log('response', response);
    },
    error => {console.log('error', error);
      //handle error
    }
  );
};
