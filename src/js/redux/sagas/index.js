import { put, takeLatest } from 'redux-saga/effects'
import * as CNSTS from '../../constants/actionNames';

function* setListquotes(action) {
    yield put(Object.assign({}, action, {
        type: CNSTS.SET_LIST_QUOTES
    }));
}

function* watchListquotesAsync() {
    yield takeLatest(CNSTS.SET_LIST_QUOTES_ASYNC, setListquotes);
}

export default function* rootSaga() {
    yield watchListquotesAsync()
}