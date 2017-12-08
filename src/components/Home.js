import React from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer';
import { createUser, signIn, confirmAuth } from '../api';

class Home extends React.Component {
  componentWillMount() {
    // createUser();
    // signIn();
    // confirmAuth();
  }

  render() {
    return (
      <div className="wrapper">
        <Nav home />
        <main role="main">
          <h1>Главная</h1>
        </main>
      </div>
    );
  }
}

export default Home;
