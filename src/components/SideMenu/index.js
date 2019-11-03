import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'
import './style.scss'
const SideMenu = ({ title, menuItems, brand }) => {
    return (
        <div className="side-menu">
            <div className="columns is-hidden-mobile is-touch is-desktop">
                <div className="column is-centered">
                    <h3 className="subtitle is-3">{title}</h3>
                </div>
            </div>
        </div>
    )
}
export default injectIntl(SideMenu)