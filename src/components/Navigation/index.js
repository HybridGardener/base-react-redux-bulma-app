import React from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import './style.scss'

const Navigation = ({ title, hamburgerClick }) => {
    return (
        <nav className="nav navbar ">
            <div className="navbar-brand">
                <span className="title">{title}</span>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={hamburgerClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-item">
                    <div className="navbar-start">
                    </div>
                </div>
                <div className="navbar-item">
                    <div className="navbar-end">

                    </div>
                </div>
            </div>

        </nav>


    )
}
export default injectIntl(Navigation)