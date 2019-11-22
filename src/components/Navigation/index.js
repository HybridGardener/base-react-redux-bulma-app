import React, { useState } from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import './style.scss'
const Navigation = ({ title, icon, iconClick, handleLogout }) => {
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
                : ""
            }

        </nav>


    )
}
export default injectIntl(Navigation)