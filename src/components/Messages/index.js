import React from 'react'
import Message from '../Message'
import { PropTypes } from 'prop-types'

const Messages = (me, sendToUser, messages) => {

    return (
        <div className="columns">
            <div className="column">
                {messages ? messages.map(item => <Message key={item.id} message={item.message} isMe={item.from == me}></Message>) : ""}
            </div>
        </div>
    )
}
Messages.propTypes = {
    sendToUser: PropTypes.string.isRequired,
    messages: PropTypes.array
}
export default Messages;