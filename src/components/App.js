/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import Home from '../components/Home';
import Login from '../components/Account/Login';
import Registration from '../components/Account/Registration';
import Profile from '../components/Account/Profile';
import Stats from '../components/Stats/Stats';
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/stats" component={Stats} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
