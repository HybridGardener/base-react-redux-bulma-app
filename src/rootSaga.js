import { put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { LOAD_MODULE, loadModule, LOGIN, loginSucceeded, loginFailed, loadModuleSucceeded, FETCH_BRAND, FETCH_USERS, FETCH_MY_MESSAGES, fetchUsersSucceeded, fetchUsers, fetchUsersFailed, fetchMyMessagesSucceeded, fetchMyMessagesFailed, fetchMyMessages, SEND_MESSAGE, sendMessageSucceeded, sendMessageFailed, LOGOUT, VALIDATE_TOKEN, loadModuleFailed, REGISTER, registrationSucceeded, registrationFailed, createTodoFailed, createTodoSucceeded, CREATE_TODO, fetchTimeframes, FETCH_TIMEFRAMES, fetchTimeframesSucceeded, fetchTimeframesFailed } from './actions';
import { BASE_URL, AUTH_PORT, ENDPOINT, BASIC_TOKEN } from './constants';
import axios from 'axios'
import uuid from 'uuid';
import { getMessages } from './appReducer';

export default function* rootSaga() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(LOAD_MODULE, loadModuleSaga);
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield takeLatest(CREATE_TODO, createTodoSaga);
    yield takeLatest(FETCH_TIMEFRAMES, fetchTimeframesSaga);


}

export function* fetchTimeframesSaga() {
    try {
        const url = `${BASE_URL}:${AUTH_PORT}${ENDPOINT}/timeframes`;
        const token = sessionStorage.getItem('token');
        const timeframes = yield axios.get(url, { headers: buildAuthHeader(token) });
        yield put(fetchTimeframesSucceeded(timeframes.data.result));
    } catch (error) {
        yield put(fetchTimeframesFailed(error));

    }
}
export function* registerSaga(action) {
    try {
        const username = action.payload.username;
        const password = action.payload.password;
        const rememberMe = action.payload.rememberMe;
        const url = `${BASE_URL}:${AUTH_PORT}${ENDPOINT}/users`;
        const user = {
            name: username,
            password: password
        }
        const response = yield axios.post(url, user, { headers: buildHeader('application/json') });
        console.log(response.statusText);
        if (response.statusText == "Created") {
            yield put(registrationSucceeded(response));
            localStorage.setItem('rememberme', rememberMe);
            localStorage.setItem('username', username);
        } else {
            yield put(registrationFailed(response.statusText));
        }

    } catch (error) {
        yield put(registrationFailed(error));

    }
}

export function* loadModuleSaga(action) {
    try {
        const token = sessionStorage.getItem('token');
        yield put(fetchTimeframes());
        if (token) {
            yield put(loadModuleSucceeded(token))
        }
        else {
            yield put(loadModuleFailed('Authorization token missing'));

        }
    } catch (error) {
        yield put(loadModuleFailed(error))

    }
}

export function* fetchUsersSaga(action) {
    try {
        const response = yield axios.get('http://localhost:3000/users');
        yield put(fetchUsersSucceeded(response.data));
    } catch (error) {
        yield put(fetchUsersFailed(error))
    }
}
export function* fetchMyMessagesSaga(action) {
    try {
        const response = yield axios.get('http://localhost:3000/messages');
        yield put(fetchMyMessagesSucceeded(response.data));
    } catch (error) {
        yield put(fetchMyMessagesFailed(error))
    }
}
export function* sendMessageSaga(action) {
    console.log(action.payload);
    const sender = action.payload.currentUser;
    const message = action.payload.messageText;
    const recipient = action.payload.messageReceiver;
    const threadId = action.payload.threadId;
    const newMessage = {
        id: uuid(),
        threadId: threadId,
        to: recipient,
        from: sender,
        message: message,
        createdDate: Date.now(),
        opened: false,
        openedDateTime: ""
    }
    try {
        const response = yield axios.post('http://localhost:3000/messages', newMessage, { headers: { "Content-Type": "application/json" } });
        if (response) {
            const messages = yield select(getMessages);
            messages.push(newMessage)
            yield put(sendMessageSucceeded(messages));
        }
    } catch (error) {
        yield put(sendMessageFailed(error))
    }
}

function buildAuthHeader(token) {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${token}`
    }
}
function buildHeader(contentType) {
    return {
        'Content-Type': contentType
    }
}
export function* loginSaga(action) {
    try {
        const username = action.payload.username;
        const password = action.payload.password;
        const url = `${BASE_URL}:${AUTH_PORT}${ENDPOINT}/login`;
        console.log(url);

        const user = {
            name: username,
            password: password
        }

        const response = yield axios.post(url, user, { headers: buildHeader('application/json') });
        console.log(response);

        const token = response.data.token;
        if (token) {
            sessionStorage.setItem('token', token);
            console.log('logged in');
            yield put(loginSucceeded(response.data));
        } else {
            yield put(loginFailed('invalid credentials'));
        }
    } catch (error) {
        yield put(loginFailed(error));
    }
}

export function* logoutSaga() {
    try {
        sessionStorage.removeItem('token');
        console.log('logged out');

    } catch (error) {
        console.log(error);
    }
}

export function* createTodoSaga(action) {
    try {
        const url = `${BASE_URL}:${AUTH_PORT}${ENDPOINT}/todos`
        const todo = action.todo;
        console.log(todo);
        const token = sessionStorage.getItem('token');
        if (token) {
            const response = yield axios.post(url, todo, { headers: buildAuthHeader(token) })
            yield put(createTodoSucceeded(response));
        }
        else {
            yield put(createTodoFailed('authorization token missing from request'))
        }
    } catch (error) {
        yield put(createTodoFailed(error));
    }
}