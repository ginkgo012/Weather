import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import './index.css';
import App from './components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>, document.getElementById('root'));
