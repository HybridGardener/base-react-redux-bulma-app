import React from 'react';

const Message = ({ message, isMe, opened, createdDate, openedDate }) => {
    const style = `${isMe ? "mine" : "yours"} messages`;
    return (
        <div className={style}>
            <div className="message">
                <p><strong>{message}</strong></p>
                <p><small>{createdDate}</small></p>
            </div>
        </div>
    )
}
export default Message;