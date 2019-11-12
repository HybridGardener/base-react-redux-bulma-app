import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import './style.scss'
import Menu from '../Menu'
const Navigation = ({ title, icon, iconClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerClick = () => {
        const val = isOpen ? false : true;
        console.log(val);
        setIsOpen(val);
    }
    return (
        <nav className="nav navbar ">
            <div className="navbar-start">
                <div className="navbar-brand">
                    <Link to="/">
                        <figure className="image is-96x96">
                            <img src={icon} alt="icon" onClick={iconClick} />
                        </figure>
                    </Link>
                </div>
            </div>

            <div className="navbar-end">
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={() => hamburgerClick()}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            {isOpen ?
                <Menu className="mobile-menu is-mobile is-hidden-touch" />
                : ""
            }

        </nav>


    )
}
export default injectIntl(Navigation)