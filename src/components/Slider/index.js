import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { PropTypes } from 'prop-types'


const Slider = ({ min, max, step, id, name, onChange, value }) => {
    return (
        <>
            <div className="field">
                <div className="tags has-addons">
                    <span className="tag is-light is-medium">
                        <FormattedMessage id={id} /></span>
                    <span className="tag is-primary is-medium">{value}</span>
                </div>
                <input min={min}
                    max={max}
                    step={step}
                    onChange={onChange}
                    name={name}
                    type="range"
                    className="slider" />
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