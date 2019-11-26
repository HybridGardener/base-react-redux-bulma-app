import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'

const TextField = ({ name, handleChange, id, styleName }) => {
    return (
        <div className="fieldset">
            <FormattedMessage id={id} className="label" />
            <textarea className={styleName}
                onChange={handleChange}
                name={name}
            />
        </div>
    )
}
TextField.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    hasCheck: PropTypes.bool
}
export default injectIntl(TextField);