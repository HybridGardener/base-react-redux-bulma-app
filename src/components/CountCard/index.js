import React from 'react'
import './style.scss'
const CountCard = ({ count, subtext, handleClick }) => {
    return (
        <div className="tile is-parent countCard" onClick={handleClick}>
            <article className="tile is-child box">
                <p className="title">{count}</p>
                <p className="subtitle">{subtext}</p>
            </article>
        </div>
    )
}
export default CountCard;