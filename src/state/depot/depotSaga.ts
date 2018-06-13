import * as moment from 'moment';
import { delay } from 'redux-saga';
import { put, select, takeEvery } from 'redux-saga/effects';
import { FinancialSnapshot } from '../AppState';
import { CapitalConfig as Config } from '../Config';
import { INIT_SNAPSHOT_CAPITAL, setStockValueDevelopment, SNAPSHOT_CAPITAL, snapshotCapital } from './depotActions';
import { getAccountValue, getCapital, getStockValueDevelopment } from './depotSelector';

function* initSnapShots() {

    const values: FinancialSnapshot[] = [];
    const capital = yield select( getAccountValue );
    for ( let i = Config.points(); i >= 0; i-- ) {
        values.push( {
            value: capital,
            date: moment().subtract( i * Config.interval, 'seconds' ).toDate(),
        } );
    }

    yield put( setStockValueDevelopment( values ) );
    yield delay( Config.interval * 1000 );
    yield put( snapshotCapital() );
}

function* makeSnapShot() {
    const currentCapital = yield select( getCapital );
    const values: FinancialSnapshot[] = yield select( getStockValueDevelopment );

    // remove first Value
    values.splice( 0, 1 );

    values.push( {
        value: currentCapital,
        date: moment().toDate()
    } );

    yield put( setStockValueDevelopment( values ) );
    yield delay( Config.interval * 1000 );
    yield put( snapshotCapital() );
}

function* depotSaga() {
    yield takeEvery( INIT_SNAPSHOT_CAPITAL, initSnapShots );
    yield takeEvery( SNAPSHOT_CAPITAL, makeSnapShot );
}

export default depotSaga;