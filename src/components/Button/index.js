import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

const Button = ({ id, style, handleClick }) => {
    return (<button className={style}><FormattedMessage id={id} handleClick={handleClick} /></button>)
}
export default injectIntl(Button)