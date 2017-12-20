import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import './Nav.scss';

class Nav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.logOut = this.logOut.bind(this);

    this.state = {
      email: null,
      popup: false,
    }
  }

  componentWillMount() {
    const email = localStorage.getItem('email');

    if (email) {
      this.setState({
        email
      });
    }
  }

  componentWillReceiveProps(props) {
    if (props.loginSuccess) {
      this.setState({
        email: props.loginSuccess
      });
    }
  }

  logOut() {
    localStorage.removeItem('JWT');
    localStorage.removeItem('email');

    this.setState({
      email: null
    });
  }

  render() {
    const { email } = this.state;

    return (
      <nav className="nav">
        <Link
          className={ClassNames({
            'nav-logo': true,
            active: !this.props.active,
          })}
          to="/"
        >
          <strong>ЛОГО</strong>
        </Link>
        <Link
          className={ClassNames({
            nav_item: true,
            active: this.props.stats,
          })}
          to="/stats"
        >
          Статистика
        </Link>
        <div className="nav_item">Чат</div>
        <div className="nav_item">Задания <span>82</span></div>
        <div className="nav_item">Киртан-радио</div>
        <div className="nav_account">
          {!email ?
            <Link
              className={ClassNames({
                nav_item: true,
                active: this.props.auth,
              })}
              to="/login"
            >
              Вход
            </Link>
          : <div className="nav_user">
              <Link
                className="nav_user_profile"
                to="/profile"
              >
                <img src="http://www.material-ui.com/images/uxceo-128.jpg" />
                <span>{email}</span>
              </Link>
              <a
                className="nav_item log-out"
                onClick={this.logOut}
              >
                Выход
              </a>
          </div>}
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  auth: PropTypes.bool,
  home: PropTypes.bool,
  // loginSuccess: PropTypes.bool,
};

export default connect(store => ({
  // signInError: store.auth.signInError,
  loginSuccess: store.account.loginSuccess,
}))(Nav);
