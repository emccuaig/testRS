import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-s7qa2vgiavu6f7z8.us.auth0.com";
const clientId = "0WQx3QHozg2ci0ycRBnC1OV82r4sRZaG";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// src/index.js
<Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  onRedirectCallback={(appState) => {
    window.history.replaceState({}, document.title, appState?.returnTo || window.location.pathname);
  }}
>
  <App />
</Auth0Provider>

);
