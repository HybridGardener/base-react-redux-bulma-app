import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropTypes } from 'prop-types'

const Select = ({ id, name, options, handleSelectionChanged }) => {
    return (
        <div>
            <FormattedMessage id={id} />
            <select name={name} onChange={handleSelectionChanged}>
                <option>-select-</option>
                {options ? options.map(item => <option key={item.key}>{item.value}</option>) : <option>-none-</option>}
            </select>
        </div>
    )
}
Select.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array,
    handleSelectionChanged: PropTypes.func.isRequired
}
export default Select;