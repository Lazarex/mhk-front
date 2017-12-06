import React from 'react';
import Nav from './Nav/Nav';
import Footer from './Footer';
import '../styles/signIn.scss';

class SignIn extends React.Component {
  render() {
    // '{"email":"sss@sss.ru","iat":1512479222}'.toObject();
    console.log(1,JSON.parse('{"email":"sss@sss.ru","iat":1512479222}'))
    return (
      <div className="wrapper">
        <Nav active />
        <main role="main" className="container">
          <div className="sign-form"></div>
          <form className="form-signin" action="javascript:void(0)">
            <h2 className="form-signin-heading">Please sign in</h2>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="text" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <div className="checkbox">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
