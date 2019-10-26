import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { LOAD_MODULE, loadModule, LOGIN } from './actions';
import { BASE_URL, PORT, USER_ACCESS_SERVICE, BASIC_TOKEN } from './constants';
import axios from 'axios'

export default function* rootSaga() {
    yield takeLatest(LOAD_MODULE, loadModuleSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield put(loadModule());
}

export function* loadModuleSaga() {
    try {
        const url = `${BASE_URL}:${PORT}/${USER_ACCESS_SERVICE}`;
        const headers = {
            "content-type": "application/json",
            "authentication": `${BASIC_TOKEN}`
        }
        const response = axios.get(url, { headers: headers });
        localStorage.setItem("accessToken", response.data)
    } catch (error) {

    }
}

export function* loginSaga(action) {

}