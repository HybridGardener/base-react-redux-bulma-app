export const LOAD_MODULE = "LOAD_MODULE";
export const LOAD_MODULE_FAILED = "LOAD_MODULE_FAILED";
export const LOAD_MODULE_SUCCEEDED = "LOAD_MODULE_SUCCEEDED";
export const LOGIN = "LOGIN";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const FETCH_BRAND = "FETCH_BRAND";
export const FETCH_BRAND_FAILED = "FETCH_BRAND_FAILED";
export const FETCH_BRAND_SUCCEEDED = "FETCH_BRAND_SUCCEEDED";
export const SET_THEME = "SET_THEME";
export const SET_CURRENT_THREAD_ID = "SET_CURRENT_THREAD_ID";
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";
export const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
export const FETCH_MY_MESSAGES = "FETCH_MY_MESSAGES";
export const FETCH_MY_MESSAGES_FAILED = "FETCH_MY_MESSAGES_FAILED";
export const FETCH_MY_MESSAGES_SUCCEEDED = "FETCH_MY_MESSAGES_SUCCEEDED";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const SEND_MESSAGE_FAILED = "SEND_MESSAGE_FAILED";
export const SEND_MESSAGE_SUCCEEDED = "SEND_MESSAGE_SUCCEEDED";


export function sendMessage(messageReceiver, messageText, currentUser, threadId) {
    return {
        type: SEND_MESSAGE,
        payload: { messageReceiver, messageText, currentUser, threadId }
    }
}
export function sendMessageFailed(error) {
    return {
        type: SEND_MESSAGE_FAILED,
        error

    }
}
export function sendMessageSucceeded(messages) {
    return {
        type: SEND_MESSAGE_SUCCEEDED,
        messages

    }
}
export function fetchMyMessages(me) {
    return {
        type: FETCH_MY_MESSAGES,
        me
    }
}
export function fetchMyMessagesFailed(error) {
    return {
        type: FETCH_MY_MESSAGES_FAILED,
        error
    }
}
export function fetchMyMessagesSucceeded(messages) {
    return {
        type: FETCH_MY_MESSAGES_SUCCEEDED,
        messages
    }
}



export function fetchUsers() {
    return {
        type: FETCH_USERS
    }
}
export function fetchUsersFailed(error) {
    return {
        type: FETCH_USERS_FAILED,
        error
    }
}
export function fetchUsersSucceeded(users) {
    return {
        type: FETCH_USERS_SUCCEEDED,
        users
    }
}

export function setTheme(theme) {
    return {
        type: SET_THEME,
        theme
    }
}
export function fetchBrand() {
    return {
        type: FETCH_BRAND
    }
}
export function fetchBrandFailed(error) {
    return {
        type: FETCH_BRAND_FAILED,
        error
    }
}
export function fetchBrandSucceeded(brand) {
    return {
        type: FETCH_BRAND_SUCCEEDED,
        brand

    }
}
export function loadModule() {
    return {
        type: LOAD_MODULE
    }
}

export function loadModuleFailed() {
    return {
        type: LOAD_MODULE_FAILED
    }
}

export function loadModuleSucceeded() {
    return {
        type: LOAD_MODULE_SUCCEEDED
    }
}

export function login(username, password) {
    return {
        type: LOGIN,
        payload: { username, password }
    }
}
export function loginFailed(error) {
    return {
        type: LOGIN_FAILED,
        error
    }
}

export function loginSucceeded() {
    return {
        type: LOGIN_SUCCEEDED

    }
}
export function setCurrentThreadId(threadId) {
    return {
        type: SET_CURRENT_THREAD_ID,
        threadId

    }
}