import React from 'react'

const CountCard = ({ count, subtext, handleClick }) => {
    return (
        <div className="tile is-parent" onClick={handleClick}>
            <article className="tile is-child box">
                <p className="title">{count}</p>
                <p className="subtitle">{subtext}</p>
            </article>
        </div>
    )
}
export default CountCard;