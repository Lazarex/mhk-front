import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
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
        <Link className={classNames({
          'nav_item nav-logo': true,
          active: !this.props.active,
        })} to="/">
          <strong>ЛОГО</strong>
        </Link>
        <div className="nav_item">Статистика</div>
        <div className="nav_item">Чат</div>
        <div className="nav_item">Задания <span>82</span></div>
        <div className="nav_item">Киртан-радио</div>
        <div className="nav-account">
          {!email ?
            <Link className={classNames({
              nav_item: true,
              active: this.props.active,
            })} to="sign-in">Вход</Link>
          : <div className="nav-account_user">
            <span>{email}</span>
            <a
              className="nav_item gray"
              onClick={this.logOut}
            >Выход</a>
          </div>
          }

        </div>
        {/*<div className="collapse navbar-collapse" id="navbarsExampleDefault">*/}
          {/*<ul className="navbar-nav mr-auto">*/}
            {/*<li className={classNames({*/}
              {/*'nav-item': true,*/}
              {/*active: !this.props.active,*/}
            {/*})}>*/}
              {/*<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>*/}
            {/*</li>*/}
            {/*<li className={classNames({*/}
              {/*'nav-item': true,*/}
              {/*active: this.props.active,*/}
            {/*})}>*/}
              {/*<Link className="nav-link" to="sign-in">Sign in</Link>*/}
            {/*</li>*/}
          {/*</ul>*/}
          {/*<form className="form-inline my-2 my-lg-0" action="javascript:void(0)">*/}
            {/*<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />*/}
            {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
          {/*</form>*/}
        {/*</div>*/}

      </nav>
    );
  }
}

Nav.propTypes = {
  active: PropTypes.bool,
};

export default Nav;
