import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import configureStore from './configure-store';

const store = configureStore({
  controls: {
    scale: 1
  }
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
);
