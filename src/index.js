import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import RootReducer from './reducers/RootReducer';

const store = createStore(RootReducer, applyMiddleware(logger));

const StoreAndApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<StoreAndApp />, document.getElementById('root'));
registerServiceWorker();
