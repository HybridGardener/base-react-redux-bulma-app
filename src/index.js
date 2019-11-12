import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import { IntlProvider, addLocaleData } from 'react-intl'
import './index.scss';
import App from './App';
import locale from './locale'
import appReducer from './appReducer'
import rootSaga from './rootSaga'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import enLocaleData from "react-intl/locale-data/en";
import Dashboard from './components/Dashboard';
import { fetchBrandSucceeded, setTheme } from './actions';
addLocaleData(enLocaleData);
const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    appReducer,
    applyMiddleware(sagaMiddleware,
        logger));
sagaMiddleware.run(rootSaga);
const brand = document.getElementsByTagName("body")[0].classList[0];
const theme = document.getElementById('root').classList[0];

store.dispatch(fetchBrandSucceeded(brand));
store.dispatch(setTheme(theme));
ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale="en" messages={locale.en} >
            <BrowserRouter history={history}>
                <App history={history} />
            </BrowserRouter>
        </IntlProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
