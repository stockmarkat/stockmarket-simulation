import { put, takeEvery } from 'redux-saga/effects';
import { initSnapshotCapital } from '../depot/depotActions';
import { loadQuests } from '../quests/questActions';
import { loadStocks } from '../stockMarket/stockMarketActions';
import { loadNews } from '../news/newsActions';
import { LOAD_STATE } from './initialLoadActions';

function* loadStateInitial() {
    yield put( loadStocks() );
    yield put( loadQuests() );
    yield put( loadNews() );
    yield put( initSnapshotCapital() );
}

function* initialLoadSaga() {
    yield takeEvery( LOAD_STATE, loadStateInitial );
}

export default initialLoadSaga;