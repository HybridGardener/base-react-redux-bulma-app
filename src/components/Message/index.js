import React from 'react';

const Message = ({ message, isMe }) => {
    const style = `${isMe ? "mine" : "yours"} messages`;
    return (
        <div className={style}>
            <div className="message">
                <p>{message}</p>
            </div>
        </div>
    )
}
export default Message;