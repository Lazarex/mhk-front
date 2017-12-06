import React from 'react';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
// import Footer from '../Footer';
import './Auth.scss';
import { checkEmail, checkPassword } from './libs';
import { signIn } from '../../api';
import { setSignInError } from '../../actions/authActions';


class SignIn extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setEmail = this.setEmail.bind(this);
    this.focusEmail = this.focusEmail.bind(this);
    this.blurEmail = this.blurEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.focusPassword = this.focusPassword.bind(this);
    this.blurPassword = this.blurPassword.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
    }
  }

  componentWillMount() {
    this.props.dispatch(setSignInError(false));
  }

  setEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  focusEmail() {
    this.setState({
      emailError: false,
      signInError: false,
    });
  }

  focusPassword() {
    this.setState({
      passwordError: false,
      signInError: false,
    });
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
      signIn(this.props.dispatch, { email, password })
    } else {
      this.setState({
        emailError: !checkEmail(email),
        passwordError: !checkPassword(password),
      })
    }
  }

  render() {
    const { signInError } = this.props;
    const { email, emailError, password, passwordError } = this.state;

    const errorEmail = emailError && <p className="error">
      Пожалуйста, проверьте правильность заполнения
    </p>;

    const errorPassword = passwordError && <p className="error">
      Введите пароль
    </p>;

    const errorSubmit = signInError && <p className="error">
      Неверные логин или пароль
    </p>;

    return (
      <div className="wrapper">
        <Nav active />
        <main role="main" className="auth">
          <div className="auth_container">
            <h1>Вход</h1>
            <div className="form">
              <div className="form_group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Введите e-mail"
                  value={email}
                  onChange={this.setEmail}
                  onFocus={this.focusEmail}
                  onBlur={this.blurEmail}
                  className={ClassNames({
                    error: emailError,
                  })}
                />
                {errorEmail}
              </div>
              <div className="form_group">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={this.setPassword}
                  onFocus={this.focusPassword}
                  onBlur={this.blurPassword}
                  className={ClassNames({
                    error: passwordError,
                  })}
                />
                {errorPassword}
              </div>
              <div className="form_group">
                <button
                  className="btn"
                  onClick={this.submit}
                >
                  Вход
                </button>
                {errorSubmit}
              </div>
              <div className="form_group">
                <div className="form_link">
                  <Link to="sign-up">Регистрация</Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/*<Footer />*/}
      </div>
    );
  }
}

export default connect(store => ({
  signInError: store.auth.signInError,
  signInSuccess: store.auth.signInSuccess,
}))(SignIn);
