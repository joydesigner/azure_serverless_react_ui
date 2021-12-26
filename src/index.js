import React from 'react';
import ReactDOM from 'react-dom';
import authentication from '@kdpw/msal-b2c-react';
import './index.css';
import App from './App';

authentication.initialize({
  instance: 'https://jsb2ctenant.b2clogin.com/tfp/',
  tenant: 'jsb2ctenant.onmicrosoft.com',
  signInPolicy: 'B2C_1_SignUpSignIn',
  applicationId: '8ddd47e6-a7a2-4828-aaee-bf778570f280',
  cacheLocation: 'sessionStorage',
  scope: ['profile', 'openid'],
  redirectUrl: 'https://covidreportingase.z26.web.core.windows.net/',
  validateAuthority: false
});

authentication.run(()=> {
  ReactDOM.render(<App />, document.getElementById('root'));
});
