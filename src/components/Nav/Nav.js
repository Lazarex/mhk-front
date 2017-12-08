import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import './Nav.scss';

class Nav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.logOut = this.logOut.bind(this);

    this.state = {
      email: null,
    }
  }
  componentWillMount() {
    const email = localStorage.getItem('email')

    if (email) {
      this.setState({
        email
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
        <div className="nav-account">
          {!email ?
            <Link className={ClassNames({
              nav_item: true,
              active: this.props.auth,
            })} to="sign-in">Вход</Link>
          : <div className="nav-account_user">
              <div className="nav-account_user_name">
                <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg" />
                <span>{email}</span>
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

export default Nav;
