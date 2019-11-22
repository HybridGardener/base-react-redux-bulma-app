import { put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { LOAD_MODULE, loadModule, LOGIN, loginSucceeded, loginFailed, loadModuleSucceeded, FETCH_BRAND, FETCH_USERS, FETCH_MY_MESSAGES, fetchUsersSucceeded, fetchUsers, fetchUsersFailed, fetchMyMessagesSucceeded, fetchMyMessagesFailed, fetchMyMessages, SEND_MESSAGE, sendMessageSucceeded, sendMessageFailed, LOGOUT } from './actions';
import { BASE_URL, AUTH_PORT, USER_ACCESS_SERVICE, BASIC_TOKEN } from './constants';
import axios from 'axios'
import uuid from 'uuid';
import { getMessages } from './appReducer';

export default function* rootSaga() {
    yield takeLatest(LOAD_MODULE, loadModuleSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(FETCH_USERS, fetchUsersSaga);
    yield takeLatest(FETCH_MY_MESSAGES, fetchMyMessagesSaga);
    yield takeLatest(SEND_MESSAGE, sendMessageSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    yield put(loadModule());

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
export function* loadModuleSaga() {
    try {
        const sessionToken = sessionStorage.getItem('token');
        yield put(loadModuleSucceeded());
    } catch (error) {

    }
}
function buildAuthHeader(token) {
    return {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
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
        const url = `${BASE_URL}:${AUTH_PORT}${USER_ACCESS_SERVICE}/login`;
        console.log(url);

        const user = {
            name: username,
            password: password
        }
        console.log(user);

        const response = yield axios.post(url, user, { headers: buildHeader('application/json') });

        if (response) {
            yield put(loginSucceeded(response.data));
            const token = response.data.token;
            sessionStorage.setItem('token', token);
            console.log(token);
            // yield put(fetchMyMessages(username));
            //yield put(fetchUsers());
        } else {
            yield put(loginFailed('invalid credentials'));
        }
    } catch (error) {
        yield put(loginFailed(error));
    }
}

export function* logoutSaga() {
    try {
        sessionStorage.setItem('token', '');
    } catch (error) {
        console.log(error);
    }
}