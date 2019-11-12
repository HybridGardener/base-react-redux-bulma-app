import React from 'react'
import Message from '../Message'

const Messages = (messages, sendToUser) => {
    return (
        <div className="columns">
            <div className="column">
                {messages ? messages.map(item => <Message message={item.message} isMe={item.isMe}></Message> ) : ""}
            </div>
        </div>
    )
}
export default Messages;