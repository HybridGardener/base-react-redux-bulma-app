import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import './style.scss'
const ProgressBar = ({ name, id, value, min, max }) => {
    return (
        <div className="field">
            <label><FormattedMessage id={id} /></label>
            <progress min={min} max={max} name={name} value={value} className="progress bar" />
        </div>)
}
ProgressBar.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.any
}
export default injectIntl(ProgressBar);