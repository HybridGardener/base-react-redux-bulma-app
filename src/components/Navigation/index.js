import React from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { getSVG } from '../../helpers/util'
const Navigation = ({ title, brand }) => {
    //  const brandIcon = getSVG(brand, 'brand-icon');

    return (
        <nav className="nav navbar">
            <div className="navbar-start">
                <figure>
                </figure>
            </div>
            <div className="navbar-end">
                <div className="navbar-menu">
                    <div className="navbar-item">

                    </div>

                </div>
            </div>
        </nav>


    )
}
export default injectIntl(Navigation)