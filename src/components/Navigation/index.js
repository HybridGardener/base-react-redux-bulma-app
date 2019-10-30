import React from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import './style.scss'

const Navigation = ({ title }) => {
    return (
        <nav className="nav navbar ">
            <div className="navbar-start">
                <span className="title is-light">{title}</span>
            </div>
            <div className="navbar-end">
                <div className="navbar-menu">
                    <div className="navbar-item "></div>
                    <Link path="/" className="is-active">Home</Link>
                </div>
            </div>
        </nav>


    )
}
export default injectIntl(Navigation)