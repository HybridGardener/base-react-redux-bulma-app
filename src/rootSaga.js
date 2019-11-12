import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LOAD_MODULE, loadModule, LOGIN, loginSucceeded, loginFailed, loadModuleSucceeded, FETCH_BRAND, FETCH_USERS, FETCH_MY_MESSAGES, fetchUsersSucceeded, fetchUsers, fetchUsersFailed } from './actions';
import { BASE_URL, PORT, USER_ACCESS_SERVICE, BASIC_TOKEN } from './constants';
import axios from 'axios'

export default function* rootSaga() {
    yield takeLatest(LOAD_MODULE, loadModuleSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(FETCH_USERS, fetchUsersSaga);
    yield takeLatest(FETCH_MY_MESSAGES, fetchMyMessagesSaga);
    yield put(loadModule());
    yield put(fetchUsers());
}

export function* fetchUsersSaga(action) {
    try {
        const users = axios.get('http://localhost:8081/listUsers');
        yield put(fetchUsersSucceeded(users));
    } catch (error) {
        yield put(fetchUsersFailed(error))
    }
}
export function* fetchMyMessagesSaga(action) {
    try {
        const me = action.me;

    } catch (error) {

    }
}
export function* loadModuleSaga() {
    try {
        /*   
           const url = `${BASE_URL}:${PORT}/${USER_ACCESS_SERVICE}`;
           const headers = {
               "content-type": "application/json",
               "authentication": `${BASIC_TOKEN}`
           }
           const response = axios.get(url, { headers: headers });
           localStorage.setItem("accessToken", response.data)*/
        yield put(loadModuleSucceeded());
    } catch (error) {

    }
}

export function* loginSaga(action) {
    try {
        const username = action.payload.username;
        const password = action.payload.password;
        if (username === 'admin' && password === '1234') {
            yield put(loginSucceeded());
        } else {
            yield put(loginFailed('invalid credentials'));
        }
    } catch (error) {
        yield put(loginFailed(error));
    }
}