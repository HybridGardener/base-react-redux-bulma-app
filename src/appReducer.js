import { LOAD_MODULE, LOAD_MODULE_FAILED, LOAD_MODULE_SUCCEEDED, LOGIN_FAILED, LOGIN_SUCCEEDED, LOGIN } from "./actions"
const initialState = {
    loading: false,
    error: "",
    authenticating: false,
    isUserLoggedIn: false,
    userProfile: {
        username: "",
        password: "",
        preferredLanguage: "",
        accessToken: ""
    }
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MODULE:
            return Object.assign({}, state, {
                loading: true
            })
        case LOAD_MODULE_FAILED:
            return Object.assign({}, state, {
                error: action.error
            })
        case LOAD_MODULE_SUCCEEDED:
            return Object.assign({}, state, {
                loading: false,
                error: null
            })
        case LOGIN:
            return Object.assign({}, state, {
                authenticating: true
            })
        case LOGIN_FAILED:
            return Object.assign({}, state, {
                error: action.error,
                authenticating: false,
                isUserLoggedIn: false
            })
        case LOGIN_SUCCEEDED:
            return Object.assign({}, state, {
                authenticating: false,
                isUserLoggedIn: true,
                error: null
            })
        default:
            return state
    }
}

export const getIsUserLoggedIn = state => state.isUserLoggedIn;
export const getAuthenticating = state => state.authenticating;
export const getError = state => state.error;
export const getLoading = state => state.loading;
export default reducer;