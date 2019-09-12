import React, { createContext } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'redux/store';

import App from 'containers/App';
const GlobalContext = createContext(App)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) module.hot.accept();
