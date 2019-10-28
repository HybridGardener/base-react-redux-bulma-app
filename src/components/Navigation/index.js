import React from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import './style.scss'

const Navigation = () => {
    return (
        <section className="hero is-primary is-medium">
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <Link path="/" className="navbar-item is-active">
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

    )
}
export default injectIntl(Navigation)