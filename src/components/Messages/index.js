import React from 'react'
import Message from '../Message'
import { PropTypes } from 'prop-types'

const Messages = ({ me, messages, receivingParty }) => {
    return (
        <div className="messages columns is-multiline">
            <div className="column is-full has-text-centered">
                <p><strong>{receivingParty}</strong></p>
            </div>
            <div className="column is-full message-area">
                {messages ? messages.map(item => <Message key={item.id} message={item.message} isMe={item.from == me} opened={item.opened} createdDate={item.createdDate}></Message>) : ""}
            </div>


        </div>
    )
}
Messages.propTypes = {
    messages: PropTypes.array,
    me: PropTypes.string.isRequired
}
export default Messages;