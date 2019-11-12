import React from 'react'
import { Link } from 'react-router-dom'
function handleMessagesClick() {

}
const Menu = () => {
    return (
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
        </div>
    )
}
export default Menu;