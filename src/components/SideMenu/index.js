import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'
import Switch from '../Switch';
const SideMenu = ({ title, menuItems, brand, onThemeChanged, themeCheckedState }) => {
    return (
        <div className="side-menu">
            <div className="columns is-hidden-mobile is-touch is-desktop">
                <div className="column is-centered">
                    <h3 className="subtitle is-3">{title}</h3>
                    <div className="columns is-multiline">
                        <div className="column is-centered is-three-quarters">
                            <Switch handleSwitch={onThemeChanged} checked={themeCheckedState} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default injectIntl(SideMenu)