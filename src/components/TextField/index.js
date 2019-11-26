import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'

const TextField = ({ name, handleChange, id, subText, type, placeholder, styleName, hasCheck }) => {
    return (
        <div className="field">
            <FormattedMessage id={id} className="label" />
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className={styleName}
                        type={type}
                        onChange={handleChange}
                        name={name}
                        placeholder={placeholder} />
                    {type === "email" ? <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span> : ""}
                    {type === "password" ? <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                    </span> : ""}
                    {hasCheck ?
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                        : ""}

                </p>
            </div>
            <p className="help">{subText}</p>
        </div>
    )
}
TextField.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    theme: PropTypes.string,
    hasCheck: PropTypes.bool
}
export default injectIntl(TextField);