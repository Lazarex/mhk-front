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
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { push } from 'react-router-redux';


class SignIn extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setEmail = this.setEmail.bind(this);
    this.blurEmail = this.blurEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.blurPassword = this.blurPassword.bind(this);
    this.submit = this.submit.bind(this);
    this.goTo = this.goTo.bind(this);

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
      signIn(this.props.dispatch, { email, password })
    } else {
      this.setState({
        emailError: !checkEmail(email),
        passwordError: !checkPassword(password),
      })
    }
  }

  goTo() {
    this.props.dispatch(push('sign-up'));
  }

  render() {
    const { signInError } = this.props;
    const { email, emailError, password, passwordError } = this.state;

    const errorSubmit = signInError && <p className="error">
      Неверные логин или пароль
    </p>;

    return (
      <div className="wrapper">
        <Nav auth />
        <main role="main">
          <h1>Вход</h1>
          <div className="auth">
            <div className="form">
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
                    label="Войти"
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
                    label="регистрация"
                    style={{height: '46px'}}
                    onClick={this.goTo}
                  />
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
