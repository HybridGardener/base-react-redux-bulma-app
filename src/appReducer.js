import { LOAD_MODULE, LOAD_MODULE_FAILED, LOAD_MODULE_SUCCEEDED, LOGIN_FAILED, LOGIN_SUCCEEDED, LOGIN, FETCH_BRAND, FETCH_BRAND_FAILED, FETCH_BRAND_SUCCEEDED, SET_THEME, FETCH_USERS, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED, FETCH_MY_MESSAGES, FETCH_MY_MESSAGES_FAILED, FETCH_MY_MESSAGES_SUCCEEDED, SET_CURRENT_THREAD_ID, SEND_MESSAGE_SUCCEEDED } from "./actions"
const initialState = {
    brand: "dxp",
    theme: "light",
    loading: false,
    error: "",
    authenticating: false,
    isUserLoggedIn: false,
    userProfile: {
        username: "hybridcoder",
        password: "",
        preferredLanguage: "",
        accessToken: ""
    },
    users: [],
    messageReceiver: "james1234",
    currentThreadId: "",
    messages: [

    ],

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
                error: null,
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
export const getUser = state => state.userProfile.username;
export const getMessages = state => state.messages;
export const getMessageReceiver = state => state.messageReceiver;
export const getCurrentThreadId = state => state.currentThreadId;
export const getAllUsers = state => state.users;
export default reducer;