import React from 'react'
import './style.scss'
const Switch = ({ handleSwitch }) => {
    return (
        <div className="switch">
            <input type="checkbox" id="switch" onChange={handleSwitch} /><label for="switch">Switch</label>
        </div>
    )
}
export default Switch