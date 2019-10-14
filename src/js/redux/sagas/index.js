import { put, takeLatest } from 'redux-saga/effects'
import * as CNSTS from '../../constants/actionNames';

// const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* setListquotes(action) {
    yield put(Object.assign({}, action, {
        type: CNSTS.SETLISTQUOTES
    }));
}

function* watchListquotesAsync() {
    yield takeLatest(CNSTS.SETLISTQUOTES_ASYNC, setListquotes);
}

export default function* rootSaga() {
    yield watchListquotesAsync()
}