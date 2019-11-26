import { LOGOUT, LOAD_MODULE, LOAD_MODULE_FAILED, LOAD_MODULE_SUCCEEDED, LOGIN_FAILED, LOGIN_SUCCEEDED, LOGIN, FETCH_BRAND, FETCH_BRAND_FAILED, FETCH_BRAND_SUCCEEDED, SET_THEME, FETCH_USERS, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED, FETCH_MY_MESSAGES, FETCH_MY_MESSAGES_FAILED, FETCH_MY_MESSAGES_SUCCEEDED, SET_CURRENT_THREAD_ID, SEND_MESSAGE_SUCCEEDED, REGISTER, REGISTRATION_FAILED, REGISTRATION_SUCCEEDED, SET_IS_REGISTER, FETCH_TIMEFRAMES_SUCCEEDED } from "./actions"
const initialState = {
    brand: "dxp",
    theme: "light",
    loading: false,
    error: "",
    authenticating: false,
    registering: false,
    isRegister: false,
    token: null,
    username: "",
    isUserLoggedIn: false,
    users: [],
    messageReceiver: "james1234",
    currentThreadId: "",
    messages: [

    ],
    timeframes: []

}
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_MODULE:
            return Object.assign({}, state, {
                loading: true
            })
        case LOAD_MODULE_FAILED:
            return Object.assign({}, state, {
                error: action.error,
                loading: false

            })
        case LOAD_MODULE_SUCCEEDED:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                token: action.token,
                isUserLoggedIn: true
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
                error: null,
                username: action.response.result.name,
                token: action.response.token
            })
        case REGISTER:
            return Object.assign({}, state, {
                registering: true
            })
        case REGISTRATION_FAILED:
            return Object.assign({}, state, {
                error: action.error,
                registering: false,
            })
        case REGISTRATION_SUCCEEDED:
            return Object.assign({}, state, {
                registering: false,
                error: null
            })
        case LOGOUT:
            return Object.assign({}, state, {
                username: "",
                token: null,
                isUserLoggedIn: false
            })
        case FETCH_BRAND:
            return Object.assign({}, state, {
                loading: true
            })
        case FETCH_BRAND_FAILED:
            return Object.assign({}, state, {
                loading: false,
                error: action.error
            })
        case FETCH_BRAND_SUCCEEDED:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                brand: action.brand

            })
        case SET_THEME:
            return Object.assign({}, state, {
                theme: action.theme
            })
        case FETCH_USERS:
            return Object.assign({}, state, {
                loading: true
            })
        case FETCH_USERS_FAILED:
            return Object.assign({}, state, {
                loading: false,
                error: action.error

            })
        case FETCH_USERS_SUCCEEDED:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                users: action.users
            })
        case FETCH_MY_MESSAGES:
            return Object.assign({}, state, {
                loading: true
            })
        case FETCH_MY_MESSAGES_FAILED:
            return Object.assign({}, state, {
                loading: false,
                error: action.error

            })
        case FETCH_MY_MESSAGES_SUCCEEDED:
            return Object.assign({}, state, {
                loading: false,
                error: null,
                messages: action.messages,
                currentThreadId: action.messages[0].threadId
            })
        case SET_CURRENT_THREAD_ID:
            return Object.assign({}, state, {
                currentThreadId: action.threadId
            })
        case SEND_MESSAGE_SUCCEEDED:
            return Object.assign({}, state, {
                messages: action.messages
            })
        case SET_IS_REGISTER:
            return Object.assign({}, state, {
                isRegister: action.isRegister
            });
        case REGISTER:
            return Object.assign({}, state, {
                registering: true
            })
        case REGISTRATION_FAILED:
            return Object.assign({}, state, {
                isRegister: true,
                isUserLoggedIn: false,
                loading: false,
                error: action.error,
            })
        case REGISTRATION_SUCCEEDED:
            return Object.assign({}, state, {
                isRegister: false,
                isUserLoggedIn: false,
                loading: false,
                error: null,
                username: action.response.data.result.name
            })
        case FETCH_TIMEFRAMES_SUCCEEDED:
            return Object.assign({}, state, {
                timeframes: action.timeframes
            })

        default:
            return state
    }
}

export const getIsUserLoggedIn = state => state.isUserLoggedIn;
export const getAuthenticating = state => state.authenticating;
export const getError = state => state.error;
export const getLoading = state => state.loading;
export const getBrand = state => state.brand;
export const getTheme = state => state.theme;
export const getUser = state => state.username;
export const getMessages = state => state.messages;
export const getMessageReceiver = state => state.messageReceiver;
export const getCurrentThreadId = state => state.currentThreadId;
export const getAllUsers = state => state.users;
export const getTimeframes = state => state.timeframes;
export const getRegistering = state => state.registering;
export const getIsRegister = state => state.isRegister;
export const getToken = state => state.token;
export default reducer;