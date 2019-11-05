import React, { useState } from 'react';
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { getIsUserLoggedIn, getLoading, getBrand, getTheme } from './appReducer';
import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';
import { setTheme } from './actions';

function App({ isUserLoggedIn, loading, brand, changeTheme, theme }) {
  const [lightDark, setLightDark] = useState("light");
  function handleThemeChange(e) {
    const val = e.target.checked ? 'dark' : 'light';
    setLightDark(val);
    changeTheme(val);
    const x = document.getElementById("root").classList[0];
    if (x != null) {
      document.getElementById("root").classList.replace(x, val);
    }
    else {
      document.getElementById("root").classList.add('light')
    }
  }
  if (!isUserLoggedIn) return <Login />
  if (loading) return <h1>Loading..</h1>
  return (
    <div className="app">
      <div className="columns is-variable is-mobile is-desktop is-multiline ">
        <div className="column is-full">
          <Navigation title={`${brand.toUpperCase()} Module`} />
        </div>
        <div className="column is-one-quarter-desktop is-one-third-touch is-hidden-mobile ">
          <SideMenu title={"Module Side Menu"} checked={theme == "dark"} themeCheckedState={lightDark} onThemeChanged={(e) => handleThemeChange(e)} />
        </div>
        <div className="column is-three-quarters-desktop is-full-mobile">
          <div className="card">
            <Switch>
              <Route exact to="/" render={() => <Dashboard title="Dashboard" brandedTheme={brand} />} />
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
const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (e) => dispatch(setTheme(e))
  }
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(App))