import React, { useState } from 'react';
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import logo from './logo.svg';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { getIsUserLoggedIn } from './rootReducer';

function App({ isUserLoggedIn }) {
  if (!isUserLoggedIn) return <Login id="" />
  return (
    <section className="section">
      <Switch>
        <Route exact to="/" render={() => <Dashboard title="Home" />} />
      </Switch>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: getIsUserLoggedIn(state)
  }
}
export default injectIntl(connect(mapStateToProps, null)(App))
