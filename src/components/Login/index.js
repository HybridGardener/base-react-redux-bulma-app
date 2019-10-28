import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import TextField from '../TextField'
import { login } from '../../actions'
import { getAuthenticating, getError } from '../../rootReducer'
import './style.scss'
import banner from '../../images/VV/banner.jpg'
import mobileBanner from '../../images/VV/mobile-banner.jpg'

const Login = ({ authenticating, handleLogin, error }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
            <div className="container login_card ">
                <div className="columns is-variable is-mobile is-touch is-desktop ">
                    <div className="column is-third is-hidden-mobile"></div>
                    <div className="column box">
                        <div className="columns is-variable is-mobile is-touch is-desktop">
                            <div className="column is-third is-hidden-mobile"></div>
                            <div className="column">
                                <h1><FormattedMessage id="Login.title" /></h1>
                            </div>
                            <div className="column is-third is-hidden-mobile"></div>
                        </div>
                        <div className="columns ">
                            <div className="column ">
                                <TextField name="username" type={"email"} hasCheck={username !== ""} styleName={"input"} id="Login.username" value={username} handleChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column ">
                                <TextField name="password" type={"password"} hasCheck={password !== ""} styleName={"input"} id="Login.password" value={password} handleChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        {error ? <div className="columns">
                            <div className="column">
                                <p>{error}</p>
                            </div>
                        </div> : ""}
                        <div className="columns">
                            <div className="column">
                                <button className="button is-primary is-fullwidth" onClick={() => handleLogin(username, password)} disabled={authenticating}>
                                    <FormattedMessage id="Login.login" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-third is-hidden-mobile"></div>
                </div>
            </div>   </section>
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
        authenticating: getAuthenticating(state),
        error: getError(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (username, password) => dispatch(login(username, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Login));