import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '../TextField';
import Select from '../Select';
import { FormattedMessage } from 'react-intl';
import { getAllUsers, getTimeframes } from '../../appReducer';
import { PRIORITIES } from '../../constants';
import { createTodo } from '../../actions';
import Textarea from '../Textarea';
const Create = ({ timeframes, users, create }) => {
    const [description, setDescription] = useState('');
    const [timeframe, setTimeframe] = useState(null);
    const [user, setUser] = useState('');
    const [priority, setItemPriority] = useState('None');
    const [notes, setNotes] = useState('');
    function handleCreate() {
        const todo = {
            description: description,
            assignedTo: user,
            priority: priority,
            status: user ? 'Assigned' : 'Unassigned',
            notes: notes,
            timeframe: timeframe,
            createdDate: Date.now()
        }
        console.log(todo);
        create(todo);
    }

    return (
        <div >
            <div className="create">
                <div className="create columns is-multiline is-mobile is-touch is-tablet is-desktop is-2">
                    <div className="column box is-centered">
                        <div className="columns is-multiline is-variable is-media is-touch is-desktop is-large">
                            <div className="column is-full">
                                <TextField id="Create.description" type={"text"} name="description" value={description} handleChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="column is-full">
                                <Textarea id="Create.notes" name="notes" value={notes} handleChange={(e) => setNotes(e.target.value)} />
                            </div>
                            <div className="column is-full">
                                <div className="fieldset">
                                    <FormattedMessage id="Create.timeframe" />
                                    <select name="timeframe" value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
                                        <option>-select-</option>
                                        {timeframes ? timeframes.map(timeframe => <option key={timeframe.minutes} value={timeframe}>{timeframe.display}</option>) : ""}
                                    </select>
                                </div>
                            </div>
                            <div className="column is-full">
                                <div className="fieldset">
                                    <FormattedMessage id="Create.priority" />
                                    <select name="priority" onChange={(e) => setItemPriority(e.target.value)}
                                        value={priority}>
                                        <option>-select-</option>
                                        {PRIORITIES ? PRIORITIES.map(priority => <option key={priority} value={priority}>{priority}</option>) : ""}
                                    </select>
                                </div>
                            </div>
                            <div className="column is-full">
                                <div>
                                    <FormattedMessage id="Create.user" />
                                    <select name="user" onChange={(e) => setUser(e.target.value)}
                                        value={user}>
                                        <option>-select-</option>
                                        {users ? users.map(item => <option key={item.username} value={item.username}>{item.username}</option>) : ""}

                                    </select>
                                </div>
                            </div>
                            <div className="column is-full">
                                <button className="button is-medium is-inverted is-outlined" onClick={() => handleCreate()}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: getAllUsers(state),
        timeframes: getTimeframes(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        create: (todo) => dispatch(createTodo(todo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create);