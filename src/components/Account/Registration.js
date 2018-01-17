import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import Nav from '../Nav/Nav';
import { checkEmail, checkPassword } from './libs';
import { registration } from '../../api';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import './Account.scss';

class Registration extends React.Component {
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

  componentWillReceiveProps(props) {
    if (props.registrationSuccess) {
      this.props.history.push('/profile');
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
      registration(this.props.dispatch, { email, password });
    } else {
      this.setState({
        emailError: !checkEmail(email),
        passwordError: !checkPassword(password),
      })
    }
  }

  render() {
    const { email, emailError, password, passwordError } = this.state;

    return (
      <div className="wrapper account">
        <Nav auth/>
        <div className="account_container">
          <h3 className="account_title">Регистрация</h3>
          {/*<div className="auth_success">
              <h3>
                Рады, что вы с нами!<br/>
                Осталось подтвердить регистрацию
              </h3>
              <div className="auth_success_text">
                Перейдите по ссылке в письме, <br/>
                которое пришло вам на e-mail
              </div>
            </div>
          */}
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
                  className="vk"
                  href="http://mhk.onsib.ru/api/v1/auth/vkontakte"
                >
                  Войти через Вконтакте
                </Button>
                <Button
                  type="primary"
                  size={'large'}
                  onClick={this.submit}
                >
                  Зарегистрироваться
                </Button>
                {this.props.registrationError && <p className="error">
                  Такой логин уже существует
                </p>}
              </div>
            </div>
            <div className="form_group">
              <div className="form_item">
                <Link to="/login">
                  Вход
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  registrationError: PropTypes.bool,
  registrationSuccess: PropTypes.bool,
};

export default connect(store => ({
  registrationError: store.account.registrationError,
  registrationSuccess: store.account.registrationSuccess,
}))(Registration);
