import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'
import Switch from '../Switch';
import { Link } from 'react-router-dom'
const SideMenu = ({ title, menuItems, brand, onThemeChanged, themeCheckedState, handleLogout }) => {
    return (
        <div className="side-menu columns">
            <div className="column is-centered">
                <h3 className="title is-3">{title}</h3>
                <div className="columns is-multiline">
                    <div className="column is-centered is-full">
                        <Switch handleSwitch={onThemeChanged} checked={themeCheckedState} />
                    </div>
                    <div className="column is-centered ">
                        <div className="columns is-multiline has-text-centered">
                            <div className="column">
                                <Link to="/create"><strong>Create</strong></Link>
                            </div>
                            <div className="column">
                                <Link to="/history"><strong>History</strong></Link>
                            </div>
                            <div className="column">
                                <Link to="/users"><strong>Users</strong></Link>
                            </div>
                            <div className="column">
                                <Link to="/messages">

                                    <i className="fas fa-envelope" ></i>

                                </Link>
                            </div>
                            <div className="column">
                                <a onClick={handleLogout}><strong>Logout</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default injectIntl(SideMenu)