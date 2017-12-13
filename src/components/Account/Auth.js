import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
// import Footer from '../Footer';
import './Auth.scss';
import { checkEmail, checkPassword } from './libs';
import { signIn, signUp } from '../../api';
import {
  setSignInError, setSignUpError, setSignInSuccess, setSignUpSuccess
} from '../../actions/authActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';


class Auth extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setEmail = this.setEmail.bind(this);
    this.blurEmail = this.blurEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.blurPassword = this.blurPassword.bind(this);
    this.submit = this.submit.bind(this);
    this.inOrUp = this.inOrUp.bind(this);

    this.state = {
      inOrUp: true,
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
    }
  }

  componentWillMount() {
    this.props.dispatch(setSignInError(false));
    this.props.dispatch(setSignUpError(false));
    this.props.dispatch(setSignInSuccess(false));
    this.props.dispatch(setSignUpSuccess(false));
  }

  // componentWillReceiveProps(props) {
  //   if (props.signInSuccess) {
  //     this.props.onRequestClose(true);
  //     this.props.dispatch(push('/'));
  //   }
  // }

  setEmail(e) {
    this.setState({
      email: e.target.value,
    });

    if (this.state.emailError && checkEmail(e.target.value)) {
      this.setState({
        emailError: false,
      });
    }
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    });

    if (this.state.passwordError && checkPassword(e.target.value)) {
      this.setState({
        passwordError: false,
      });
    }
  }

  blurEmail(e) {
    this.setState({
      emailError: !checkEmail(e.target.value),
    });
  }

  blurPassword(e) {
    this.setState({
      passwordError: !checkPassword(e.target.value),
    });
  }

  submit() {
    const { email, password, inOrUp } = this.state;

    if (checkEmail(email) && checkPassword(password)) {
      inOrUp ? signIn(this.props.dispatch, { email, password }) :
        signUp(this.props.dispatch, { email, password });
    } else {
      this.setState({
        emailError: !checkEmail(email),
        passwordError: !checkPassword(password),
      })
    }
  }

  inOrUp() {
    this.setState({
      inOrUp: !this.state.inOrUp,
    })
  }

  render() {
    const { signInError, signUpError, signUpSuccess } = this.props;
    const { email, emailError, password, passwordError, inOrUp } = this.state;

    let errorSubmit = signInError && <p className="error">
      Неверные логин или пароль
    </p>;

    if (signUpError) {
      errorSubmit = <p className="error">
        Такой логин уже существует
      </p>;
    }

    return (
      <div className={ClassNames({
        'auth': true,
        'auth_success': signUpSuccess,
      })}>
        <div
          className="popup-close"
          onClick={this.props.onRequestClose}
        />
        {!signUpSuccess ? <h3>{inOrUp ? 'Вход' : 'Регистрация'}</h3> :
          <div className="auth_success">
            <h3>
              Рады, что вы с нами!<br/>
              Осталось подтвердить регистрацию
            </h3>
            <div className="auth_success_text">
              Перейдите по ссылке в письме, <br/>
              которое пришло вам на e-mail
            </div>
          </div>
        }
        {!signUpSuccess && <div className="form">
          <div className="form_group">
            <div className="form_item">
              <TextField
                floatingLabelText="Введите e-mail"
                hintText="E-mail"
                errorText={emailError && 'Проверьте правильность заполнения'}
                className="input"
                value={email}
                onChange={this.setEmail}
                onBlur={this.blurEmail}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form_group">
            <div className="form_item">
              <TextField
                floatingLabelText="Введите пароль"
                hintText="пароль"
                errorText={passwordError && 'Нужен пароль'}
                type="password"
                className="input"
                value={password}
                onChange={this.setPassword}
                onBlur={this.blurPassword}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form_group">
            <div className="form_item">
              <RaisedButton
                className="btn"
                onClick={this.submit}
                backgroundColor="#fbb03b"
                fullWidth={true}
                label={inOrUp ? 'Войти' : 'Зарегистрироваться'}
                style={{height: '46px'}}
              />
              {errorSubmit}
            </div>
          </div>
          <div className="form_group">
            <div className="form_item">
              <FlatButton
                className="btn"
                fullWidth={true}
                label={inOrUp ? 'Регистрация' : 'Авторизация'}
                style={{height: '46px'}}
                onClick={this.inOrUp}
              />
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

Auth.propTypes = {
  onRequestClose: PropTypes.func
};

export default connect(store => ({
  signInError: store.auth.signInError,
  signInSuccess: store.auth.signInSuccess,

  signUpError: store.auth.signUpError,
  signUpSuccess: store.auth.signUpSuccess,
}))(Auth);
