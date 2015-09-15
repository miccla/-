import alt from '../alt';

class AuthActions {

  authUser(credentials) {
    this.dispatch(credentials);
  }

  authFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

}

export default alt.createActions(AuthActions);
