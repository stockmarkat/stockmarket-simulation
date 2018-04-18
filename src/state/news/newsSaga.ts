import { put, takeEvery } from 'redux-saga/effects';
import { StockNews } from '../AppState';
import { addNews, LOAD_NEWS } from './newsActions';

const newsJson = require( './news.json' );

function* loadInitialQuests() {
    let news: StockNews[] = newsJson;

    // set Default values

    news.forEach( n => {
        n.isActive = false;
    } );

    yield put( addNews( news ) );
}

function* newsSaga() {
    yield takeEvery( LOAD_NEWS, loadInitialQuests );
}

export default newsSaga;