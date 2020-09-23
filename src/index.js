import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// Styles
import './index.css';
// Components
import App from './App';
// Redux
import Store from './redux/store'
// SW
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
