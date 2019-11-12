import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Messages from '../Messages';

const Messenger = ({ availableUsers,selectedUser,currentThread }) => {
    return (
        <div className="messenger columns is-multiline">
            <div className="column is-centered is-full box">
                <div className="columns is-multiline">
                    <div className="column is-quarter ">
                        <span className="button is-large icon"><i class="fas fa-cogs"></i></span>
                    </div>
                    <div className="column is-quarter">
                        <span className="button is-large icon" >
                            <i class="fas fa-comments"></i>
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
                                <Messages Messages={currentThread} sendToUser={selectedUser}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
}
const mapStateToProps = (state) => {
    return {
        chatWindows: state.chatWindows
    }
}
export default connect(mapStateToProps, null)(Messenger)