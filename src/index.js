import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import './img/favicons/android-icon-192x192.png';
import './img/favicons/apple-icon-120x120.png';
import './img/favicons/ms-icon-144x144.png';
import './img/favicons/favicon-32x32.png';

// Render the main component into the dom
render(
  <App />, document.getElementById('root'),
);
