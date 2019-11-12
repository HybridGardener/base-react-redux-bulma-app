import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '../TextField';
import Select from '../Select';
const Create = ({ timeframes, users }) => {
    const [description, setDescription] = useState('');
    const [timeframe, setTimeframe] = useState('');
    const [user, setUser] = useState('');
    return (
        <div >
            <div className="create">
                <div className="create columns is-multiline is-mobile is-touch is-tablet is-desktop is-2">
                    <div className="column box is-centered">
                        <div className="columns is-multiline is-variable is-media is-touch is-desktop is-large">
                            <div className="column is-full">
                                <TextField id="Create.description" name="description" value={description} handleChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className="column is-full">
                                <Select id="Create.timeframe" name="timeframe" value={timeframe} handleSelectionChanged={(e) => setTimeframe(e.target.value)} />
                            </div>
                            <div className="column is-full">
                                <Select id="Create.user" name="user" value={user} handleSelectionChanged={(e) => setUser(e.target.value)} />
                            </div>
                            <div className="column is-full">
                                <button className="button is-medium is-inverted is-outlined">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;