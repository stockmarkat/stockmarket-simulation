import { delay } from 'redux-saga';
import { put, select, takeEvery } from 'redux-saga/effects';
import { FinancialSnapshot } from '../AppState';
import { Config } from '../Config';
import { setStockValueDevelopment, SNAPSHOT_CAPITAL, snapshotCapital } from './depotActions';
import { getCapital, getStockValueDevelopment } from './depotSelector';
import * as moment from 'moment';

function* makeSnapShot() {
    const currentCapital = yield select( getCapital );
    const values: FinancialSnapshot[] = yield select( getStockValueDevelopment );

    if ( values.length > Config.points() ) {
        // remove first Value
        values.splice( 0, 1 );
    }

    values.push( {
        value: currentCapital,
        date: moment().toDate()
    } );

    yield put( setStockValueDevelopment( values ) );
    yield delay( Config.interval * 1000 + Config.depotSnapshotDelayInMs );
    yield put( snapshotCapital() );
}

function* depotSaga() {
    yield takeEvery( SNAPSHOT_CAPITAL, makeSnapShot );
}

export default depotSaga;