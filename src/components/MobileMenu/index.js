import React from 'react'

const MobileMenu = () => {
    return (
        <div className="mobile-menu columns is-multiline is-mobile is-tablet is-hidden-desktop ">
            <div className="column is-full">
                <button className="button is-inverted is-outlined">Create To-Do</button>
                <button className="button is-inverted is-outlined">History</button>
                <button className="button is-inverted is-outlined">Users</button>
                <button className="button is-inverted is-outlined">Settings</button>
            </div>
        </div>
    )
}
export default MobileMenu;