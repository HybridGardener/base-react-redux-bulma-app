import React from 'react';
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import { PropTypes } from 'prop-types'
import Messages from '../Messages';
import { getMessages } from '../../appReducer';


const Messenger = ({ availableUsers, selectedUser, currentThread, messages }) => {
    return (
        <div className="messenger columns is-multiline">
            <div className="column is-centered is-full box">
                <div className="columns is-multiline">
                    <div className="column is-quarter ">
                        <span className="button is-large icon"><i className="fas fa-cogs"></i></span>
                    </div>
                    <div className="column is-quarter">
                        <span className="button is-large icon" >
                            <i className="fas fa-comments"></i>
                        </span>
                    </div>
                    <div className="column is-quarter">
                    </div>
                    <div className="column is-quarter">
                        <span className="button is-large icon" >
                            <i class="far fa-address-book"></i>
                        </span>
                    </div>
                    <div className="column is-full">
                        <div className="columns is-multiline">
                            <div className="column is-full">
                                <Messages messages={messages} sendToUser={selectedUser} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
}
const mapStateToProps = (state) => {
    return {
        messages: getMessages(state)
    }
}
export default connect(mapStateToProps, null)(Messenger)