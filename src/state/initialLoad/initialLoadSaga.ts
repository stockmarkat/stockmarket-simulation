import { put, takeEvery } from 'redux-saga/effects';
import { snapshotCapital } from '../depot/depotActions';
import { loadQuests } from '../quests/questActions';
import { loadStocks } from '../stockMarket/stockMarketActions';
import { LOAD_STATE } from './initialLoadActions';

function* loadStateInitial() {
    yield put(loadStocks());
    yield put(loadQuests());
    yield put(snapshotCapital());
}

function* initialLoadSaga() {
    yield takeEvery(LOAD_STATE, loadStateInitial);
}

export default initialLoadSaga;