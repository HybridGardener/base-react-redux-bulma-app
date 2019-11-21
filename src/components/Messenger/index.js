import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import Messages from '../Messages';
import { getMessages, getUser, getMessageReceiver, getCurrentThreadId, getAllUsers } from '../../appReducer';
import { sendMessage } from '../../actions';

const Messenger = ({ currentUser, messageReceiver, messages, threadId, send, allUsers }) => {
    function handleClick() {
        send(messageReceiver, messageText, currentUser, threadId);
        console.log(messageReceiver, messageText, currentUser, threadId);

    }
  
    const [messageText, setMessageText] = useState('');
  
    return (
        <div className="messenger columns is-multiline">
            <div className="column is-centered is-full box">
                <div className="columns is-multiline">
                    <div className="column is-two-fifths user-area">
                        {allUsers ? allUsers.map(user => <div className="columns" key={user.username}>
                            <div className="column has-test-centered">{user.username}</div>

                        </div>) : ""}
                    </div>
                    <div className="column is-three-fifths">
                        <div className="columns is-multiline">
                            <div className="column is-full">
                                <Messages messages={messages} me={currentUser} receivingParty={messageReceiver} />
                            </div>
                            <div className="column is-four-fifths">
                                <textarea id="Messanger.input" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
                            </div>
                            <div className="column is-one-fifth">
                                <button className="button is-large is-fullwidth" onClick={() => handleClick()}>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-full">
                        <div className="columns is-mobile is-desktop">
                            <div className="column"> <i className="far fa-comments"></i></div>
                            <div className="column"> <i className="fas fa-user"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
const mapStateToProps = (state) => {
    return {
        messages: getMessages(state),
        currentUser: getUser(state),
        messageReceiver: getMessageReceiver(state),
        threadId: getCurrentThreadId(state),
        allUsers: getAllUsers(state)

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        send: (messageReceiver, messageText, currentUser, threadId) => dispatch(sendMessage(messageReceiver, messageText, currentUser, threadId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Messenger)