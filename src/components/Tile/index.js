import React from 'react'
import { PropTypes } from 'prop-types'
import { injectIntl, FormattedMessage } from 'react-intl'
import './style.scss'
const Tile = ({ titleId, subtitleId, img, onClick, children }) => {
    return (
        <div className="tile is-parent" onClick={onClick}>
            <article className="tile is-child box">
                {titleId ? <p className="title"><FormattedMessage id={titleId} /></p> : ""}
                {subtitleId ? <p className="subtitle"><FormattedMessage id={subtitleId} /></p> : ""}
                {img ? <frame><img src={img} alt="image" /></frame> : ""}
                {children ? <div>{children}</div> : ""}
            </article>
        </div>
    )
}
Tile.propTypes = {
    titleId: PropTypes.string,
    subtitleId: PropTypes.string,
    img: PropTypes.string,
    children: PropTypes.object
}
export default injectIntl(Tile)