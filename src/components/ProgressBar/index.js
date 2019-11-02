import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'

const ProgressBar = ({ name, id, value, min, max, brand }) => {
    return (<div className={brand}>
        <div className="field">
            <label><FormattedMessage id={id} /></label>
            <progress min={min} max={max} name={name} value={value} className="progress bar" />
        </div>
    </div>
    )
}
ProgressBar.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}
export default injectIntl(ProgressBar);