import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { PropTypes } from 'prop-types'
import './style.scss'


const Slider = ({ min, max, step, id, name, onChange, value }) => {
    return (
        <>
            <FormattedMessage id={id} />
            <div className="field level">
                <input min={min} max={max} step={step} onChange={onChange} type="range" className="slider" />
                <span className="tag is-light is-medium">{value}</span>
            </div>
        </>
    )
}
Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number
}
export default injectIntl(Slider);