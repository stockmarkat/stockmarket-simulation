import { put, takeEvery } from 'redux-saga/effects';
import { loadQuests } from '../quests/questActions';
import { LOAD_STATE } from './initialLoadActions';

function* loadStateInitial() {
    yield put(loadQuests());
}

function* initialLoadSaga() {
    yield takeEvery(LOAD_STATE, loadStateInitial);
}

export default initialLoadSaga;