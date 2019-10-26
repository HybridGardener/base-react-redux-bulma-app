import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import './style.scss';

const TextField = ({ name, handleChange, id, subText }) => {
    return (
        <div className="field">
            <FormattedMessage id={id} className="label" />
            <div className="control">
                <input className="input"
                    type="text"
                    onChange={handleChange}
                    name={name}
                    placeholder="Text input" />
            </div>
            <p className="help">{subText}</p>
        </div>
    )
}
TextField.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    theme: PropTypes.string
}
export default injectIntl(TextField);