import authentication from 'jwt-decode';
import decodeJWT from 'jwt-decode';

class Auth {
  isLoggedIn() {
    if (authentication.getAccessToken()) {
      return true;
    } 
    return false;
  }

  logout() {
    authentication.signOut();
  }

  getToken() {
    return authentication.getAccessToken(); 
  }

  currentUser() {
    const decoded = decodeJWT(authentication.getAccessToken());
    return {
      emails: decoded.emails
    };
  }
}

export default new Auth();