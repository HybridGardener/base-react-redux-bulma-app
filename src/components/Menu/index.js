import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="menu columns is-multiline is-hidden-mobile ">
            <div className="column ">
                <Link className="button is-inverted is-outlined is-large" to="/create">Create</Link>
            </div>
            <div className="column ">
                <Link className="button is-inverted is-outlined  is-large" to="/history">History</Link>
            </div>
            <div className="column">
                <Link className="button is-inverted is-outlined  is-large" to="/users">Users</Link>
            </div>
        </div>
    )
}
export default Menu;