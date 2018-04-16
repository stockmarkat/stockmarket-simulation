import { takeEvery } from 'redux-saga/effects';
import { LOAD_STATE } from './initialLoadActions';

function* loadStateInitial() {
    yield null;
}

function* initialLoadSaga() {
    yield takeEvery( LOAD_STATE, loadStateInitial );
}

export default initialLoadSaga;