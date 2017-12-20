import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import { checkEmail, checkPassword } from './libs';
import { login } from '../../api';
import './Account.scss';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setEmail = this.setEmail.bind(this);
    this.blurEmail = this.blurEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.blurPassword = this.blurPassword.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
    }
  }

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
    const { email, password } = this.state;

    if (checkEmail(email) && checkPassword(password)) {
      login(this.props.dispatch, { email, password });
    } else {
      this.setState({
        emailError: !checkEmail(email),
        passwordError: !checkPassword(password),
      })
    }
  }

  render() {
    const { email, password, emailError, passwordError } = this.state;

    return (
      <div className="wrapper account">
        <Nav auth/>
        <div className="size-limit _320">
          <h3 className="account_title">Вход</h3>
          <div className="form">
            <div className="form_group">
              <div className="form_item">
                <Input
                  placeholder="Введите e-mail"
                  value={email}
                  onChange={this.setEmail}
                  onBlur={this.blurEmail}
                  size={'large'}
                  className={ClassNames({ error: emailError })}
                />
                {emailError && <p className="error">
                  Проверьте правильность заполнения
                </p>}
              </div>
            </div>
            <div className="form_group">
              <div className="form_item">
                <Input
                  placeholder="Введите пароль"
                  type="password"
                  value={password}
                  onChange={this.setPassword}
                  onBlur={this.blurPassword}
                  size={'large'}
                  className={ClassNames({ error: passwordError })}
                />
                {passwordError && <p className="error">
                  Введите пароль
                </p>}
              </div>
            </div>
            <div className="form_group">
              <div className="form_item">
                <Button
                  type="primary"
                  size={'large'}
                  onClick={this.submit}
                >
                  Войти
                </Button>
                {this.props.loginError && <p className="error">
                  Неверные логин или пароль
                </p>}
              </div>
            </div>
            <div className="form_group">
              <div className="form_item">
                <Link to="/registration">
                  Регистрация
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginError: PropTypes.bool,
};

export default connect(store => ({
  loginError: store.account.loginError,
}))(Login);
