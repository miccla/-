import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AltContainer from 'alt/AltContainer';
import CloseStore from '../stores/CloseStore';
import reactMixin from 'react-mixin';


class Login extends React.Component {

  state = {
    user: '',
    password: '',
  }

  // This will be called when the user clicks on the login button
  login(e) {
    e.preventDefault();
    // Here, we call an external AuthService. We'll create it in the next step
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        console.log('Error logging in', err);
      });
  }

  render() {
    return (
        <form role="form">
          <div className="form-group">
            <input type="text" valueLink={this.linkState('user')}placeholder="Username" />
            <input type="password" valueLink={this.linkState('password')} placeholder="Password" />
          </div>
        <button type="submit" onClick={this.login.bind(this)}>Submit</button>
      </form>
    );
  }
}

// We're using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
reactMixin(Login.prototype, React.addons.LinkedStateMixin);

export default Login;
