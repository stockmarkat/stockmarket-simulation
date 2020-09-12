import * as moment from 'moment';
import { delay, put, select, takeEvery } from 'redux-saga/effects';
import { FinancialSnapshot } from '../AppState';
import { CapitalConfig as Config } from '../Config';
import { INIT_SNAPSHOT_CAPITAL, setStockValueDevelopment, SNAPSHOT_CAPITAL, snapshotCapital } from './depotActions';
import { getCapital, getStockValueDevelopment } from './depotSelector';

function* initSnapShots() {

    // fills the store with empty values to make the diagram look correct
    const values: FinancialSnapshot[] = [];
    for ( let i = Config.points(); i >= 0; i-- ) {
        values.push( {
            value: undefined,
            date: moment().subtract( i * Config.interval, 'seconds' ).format( 'HH:mm' ),
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
    if ( Config.points() < values.length ) {
        values.splice( 0, 1 );
    }
    values.push( {
        value: currentCapital,
        date: moment().format( 'HH:mm' )
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