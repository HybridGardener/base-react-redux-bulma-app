import React, { useState } from 'react';
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { getIsUserLoggedIn, getLoading, getBrand, getTheme, getUser, getAllUsers } from './appReducer';
import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';
import { setTheme, logout } from './actions';
import Create from './components/Create';
import Messenger from './components/Messenger';

function App({ isUserLoggedIn, loading, brand, changeTheme, theme, history, currentUser, users, signOff }) {
  const brandIcon = require(`./images/${brand}/emblem.png`)
  const [lightDark, setLightDark] = useState("light");
  function handleIconClick() {
    history.push('/');
  }
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
  function handleLogout() {
    console.log('handleLogout');
    signOff();
  }
  const sessionToken = sessionStorage.getItem('token');
  if (!isUserLoggedIn && !sessionToken) return <Login />
  if (loading) return <h1>Loading..</h1>
  return (
    <div className="app">

      <div className="columns is-variable is-multiline is-gapless">
        <div className="column is-full">
          <Navigation title={`${brand.toUpperCase()} Module`} icon={brandIcon} iconClick={() => handleIconClick()} handleLogout={() => handleLogout()} />
        </div>
        <div className="column is-one-quarter-desktop is-one-quarter-tablet is-one-quarter-touch is-hidden-mobile">
          <SideMenu title={"Side Menu"} checked={theme == "dark"} themeCheckedState={lightDark} onThemeChanged={(e) => handleThemeChange(e)} handleLogout={() => handleLogout()} />
        </div>
        <div className="column is-full-mobile">
          <Switch>
            <Route exact path="/" render={() => <Dashboard title="Dashboard" brandedTheme={brand} />} />
            <Route path="/create" render={() => <Create users={users} />} />
            <Route path="/messages" render={() => <Messenger />} />
          </Switch>
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
    theme: getTheme(state),
    currentUser: getUser(state),
    users: getAllUsers(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (e) => dispatch(setTheme(e)),
    signOff: () => dispatch(logout())
  }
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(App))