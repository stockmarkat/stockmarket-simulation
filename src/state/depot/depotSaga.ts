import { takeEvery } from 'redux-saga/effects';

function* loadStateInitial() {
    yield null;
}

function* depotSaga() {
    yield takeEvery('init', loadStateInitial);
}

export default depotSaga;