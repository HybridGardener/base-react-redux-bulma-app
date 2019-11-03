import React, { useState } from 'react';
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { getIsUserLoggedIn, getLoading, getBrand, getTheme } from './appReducer';
import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';
function App({ isUserLoggedIn, theme, loading, brand }) {
  if (!isUserLoggedIn) return <Login />
  if (loading) return <h1>Loading..</h1>
  return (
    <div>
      <div className="columns is-variable is-mobile is-desktop is-multiline ">
        <div className="column is-full">
          <Navigation title="DXP Module" />
        </div>
        <div className="column is-one-quarter-desktop is-one-third-touch is-hidden-mobile ">
          <SideMenu title={"Module Side Menu"} />
        </div>
        <div className="column is-three-quarters-desktop is-full-mobile">
          <div className="card">
            <Switch>
              <Route exact to="/" render={() => <Dashboard title="Dashboard" brandedTheme={`${brand}-${theme}`} />} />
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
    loading: getLoading(state),
    brand: getBrand(state),
    theme: getTheme(state)
  }
}
export default injectIntl(connect(mapStateToProps, null)(App))