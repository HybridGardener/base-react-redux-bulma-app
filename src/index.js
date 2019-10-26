import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import { IntlProvider, addLocaleData } from 'react-intl'
import './index.scss';
import App from './App';
import locale from './locale'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import enLocaleData from "react-intl/locale-data/en";
import Dashboard from './components/Dashboard';
addLocaleData(enLocaleData);
const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware,
        logger));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale="en" messages={locale.en} >
            <BrowserRouter history={history}>
                <App />
            </BrowserRouter>
        </IntlProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();