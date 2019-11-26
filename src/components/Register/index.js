import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import TextField from '../TextField'
import { register } from '../../actions'
import { getRegistering, getError } from '../../appReducer'
import './style.scss'
import banner from '../../images/vv/banner.jpg'
import mobileBanner from '../../images/vv/mobile-banner.jpg'

const Register = ({ registering, handleRegister, error }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <section className="section">
            <div className="hero is-unmargined">
                <div className="columns is-variable is-mobile is-touch is-desktop">
                    <div className="column is-hidden-mobile  ">
                        <figure className="image is-fullwidth">
                            <img alt="banner" src={banner}>
                            </img>
                        </figure>
                    </div>
                    <div className="column is-mobile is-hidden-desktop is-hidden-tablet  ">
                        <figure className="image is-fullwidth">
                            <img alt="mobile-banner" src={mobileBanner} />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="container login_card">
                <div className="columns is-variable is-mobile is-touch is-desktop ">
                    <div className="column is-third is-hidden-mobile"></div>
                    <div className="column box">
                        <div className="columns is-variable is-mobile is-touch is-desktop">
                            <div className="column is-third is-hidden-mobile"></div>
                            <div className="column">
                                <h1><FormattedMessage id="Register.title" /></h1>
                            </div>
                            <div className="column is-third is-hidden-mobile"></div>
                        </div>
                        <div className="columns ">
                            <div className="column ">
                                <TextField name="username" type={"email"} hasCheck={username !== ""} styleName={"input"} id="Register.username" value={username} handleChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column ">
                                <TextField name="password" type={"password"} hasCheck={password !== ""} styleName={"input"} id="Register.password" value={password} handleChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column ">
                                <TextField name="confirmPassword" type={"password"} hasCheck={confirmPassword === password && confirmPassword !== ""} styleName={"input"} id="Register.confirmPassword" value={confirmPassword} handleChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column ">
                                <div className="fieldset">
                                    <FormattedMessage id="Register.rememberMe" />
                                    <input className="checkbox" type="checkbox" />

                                </div>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                <button className="button is-primary is-fullwidth" onClick={() => handleRegister(username, password)} disabled={registering || confirmPassword !== password || username === ""}>
                                    <FormattedMessage id="Register.register" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-third is-hidden-mobile"></div>
                </div>
            </div>   </section >
    )
}
function validateEmail(email) {
    return email !== "";
}
function validatePassword(password) {
    return password !== "";
}
const mapStateToProps = (state) => {
    return {
        registering: getRegistering(state),
        error: getError(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleRegister: (username, password) => dispatch(register(username, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Register));