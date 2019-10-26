import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import TextField from '../TextField'
import { login } from '../../actions'
import { getAuthenticating } from '../../rootReducer'
import './style.scss'
import banner from '../../images/VV/banner.jpg'
import mobileBanner from '../../images/VV/mobile-banner.jpg'
const Login = ({ authenticating, handleLogin, title }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <section className="section">

            <div className="columns is-variable is-mobile is-touch is-desktop">
                <div className="column is-hidden-mobile">
                    <img alt="banner" src={banner}>
                    </img>
                </div>
                <div className="column is-hidden-desktop">
                    <figure className="image is-fullwidth">
                        <img alt="mobile-banner" src={mobileBanner} />
                    </figure>
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
                                <TextField name="username" id="Login.username" value={username} handleChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column ">
                                <TextField name="password" id="Login.password" value={password} handleChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
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
const mapStateToProps = (state) => {
    return {
        authenticating: getAuthenticating(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (username, password) => dispatch(login(username, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Login));