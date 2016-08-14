import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import riosReducer from '../reducers/reducers';

import Routes from './Routes';

const loggerMiddleware = createLogger();

let store = createStore(riosReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default class Store extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

