import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComp from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <AppComp/>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
