import { put, takeEvery } from 'redux-saga/effects';
import { loadQuests } from '../quests/questActions';
import { loadStocks } from '../stockMarket/stockMarketActions';
import { LOAD_STATE } from './initialLoadActions';

function* loadStateInitial() {
    yield put(loadStocks());
    yield put(loadQuests());
}

function* initialLoadSaga() {
    yield takeEvery(LOAD_STATE, loadStateInitial);
}

export default initialLoadSaga;