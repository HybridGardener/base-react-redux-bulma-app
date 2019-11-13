import React from 'react'
import Message from '../Message'
import { PropTypes } from 'prop-types'

const Messages = ({ me, messages, receivingParty }) => {
    return (
        <div className="columns">
            <p><strong>{receivingParty}</strong></p>
            <div className="column">
                {messages ? messages.map(item => <Message key={item.id} message={item.message} isMe={item.from == me}></Message>) : ""}
            </div>
        </div>
    )
}
Messages.propTypes = {
    messages: PropTypes.array,
    me: PropTypes.string.isRequired
}
export default Messages;