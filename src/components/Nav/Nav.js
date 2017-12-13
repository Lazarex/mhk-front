import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ClassNames from 'classnames';
import './Nav.scss';

import Auth from '../Account/Auth';
import Profile from '../Account/Profile';

import {
  setSignInSuccess
} from '../../actions/authActions';

import Dialog from 'material-ui/Dialog';

class Nav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.logOut = this.logOut.bind(this);
    this.popup = this.popup.bind(this);

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
    if (props.signInSuccess) {
      this.popup();
      this.setState({
        email: props.signInSuccess,
      });


      this.props.dispatch(setSignInSuccess(false));
    }
  }

  logOut() {
    localStorage.removeItem('JWT');
    localStorage.removeItem('email');

    this.setState({
      email: null
    });
  }

  popup() {
    this.setState({
      popup: !this.state.popup,
    });
  }

  render() {
    const { email } = this.state;
    return (
      <nav className="nav">
        <Link className={ClassNames({
          'nav-logo': true,
          active: !this.props.active,
        })} to="/">
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
            <div
              className={ClassNames({
                nav_item: true,
                active: this.props.auth,
              })}
              onClick={this.popup}
            >
              Вход
              <Dialog
                className="popup"
                modal={false}
                open={this.state.popup}
                onRequestClose={this.popup}
              >
                <Auth onRequestClose={this.popup} />
              </Dialog>
            </div>
          : <div className="nav_user">
              <div
                className="nav_user_profile"
                onClick={this.popup}
              >
                <img src="http://www.material-ui.com/images/uxceo-128.jpg" />
                <span>{email}</span>

                <Dialog
                  className="popup"
                  modal={false}
                  open={this.state.popup}
                  onRequestClose={this.popup}
                >
                  <Profile onRequestClose={this.popup} />
                </Dialog>
              </div>
              <a
                className="nav_item log-out"
                onClick={this.logOut}
              >Выход</a>
          </div>}


        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  auth: PropTypes.bool,
  home: PropTypes.bool,
};

export default connect(store => ({
  // signInError: store.auth.signInError,
  signInSuccess: store.auth.signInSuccess,
}))(Nav);
