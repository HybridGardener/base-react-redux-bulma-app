import React, { useState } from 'react';
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { getIsUserLoggedIn, getLoading } from './appReducer';
import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';
function App({ isUserLoggedIn, theme, loading }) {
  if (!isUserLoggedIn) return <Login />
  return (
    <div>
      <Navigation title="DXP Module" />
      <div className="columns is-variable is-mobile is-desktop is-multiline ">
        <div className="column is-one-quarter-desktop is-mobile ">
          <SideMenu title={"Module Side Menu"} />
        </div>
        <div className="column is-three-quarters-desktop is-full-mobile">
          <div className="card">
            <Switch>
              <Route exact to="/" render={() => <Dashboard title="Dashboard" />} />
            </Switch>
          </div>
        </div>
      </div>
      <footer className="footer">

      </footer>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: getIsUserLoggedIn(state),
    loading: getLoading(state)
  }
}
export default injectIntl(connect(mapStateToProps, null)(App))