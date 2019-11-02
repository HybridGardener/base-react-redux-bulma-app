import React, { useState } from 'react';
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { getIsUserLoggedIn, getTheme, getBrand, getLoading } from './appReducer';
import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';
import BrandedOverlay from './components/BrandedOverlay';
function App({ isUserLoggedIn, theme, loading, brand }) {
  if (!isUserLoggedIn) return <Login />
  return (
    <div className={brand}>
      <Navigation title="DXP Module" />
      <div className="columns is-variable is-mobile is-desktop is-multiline ">
        <div className="column is-one-quarter-desktop is-mobile ">
          <SideMenu title={"Module Side Menu"} />
        </div>
        <div className="column is-three-quarters-desktop is-full-mobile">
          <div className="card">
            <Switch>
              <Route exact to="/" render={() => <Dashboard title="Dashboard" brand={brand} />} />
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
    theme: getTheme(state),
    loading: getLoading(state),
    brand: getBrand(state)
  }
}
export default injectIntl(connect(mapStateToProps, null)(App))
