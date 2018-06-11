import * as moment from 'moment';
import { delay } from 'redux-saga';
import { put, select, takeEvery } from 'redux-saga/effects';
import { addNotification } from '../../components/NotificationSystem';
import { cloneState, Stock } from '../AppState';
import { changeAccountValue } from '../depot/depotActions';
import { getAccountValue } from '../depot/depotSelector';
import {
    addStocks,
    BUY_OR_SELL_STOCKS,
    BuyOrSellStockAction,
    CALCULATE_NEXT_STOCK_VALUES,
    calculateNextStockValues,
    changeStockQuantity,
    LOAD_STOCKS,
    UpdateStockData,
    updateStocks
} from './stockMarketActions';
import { getStocks } from './stockSelector';

function getRandomArbitrary( min: number, max: number ) {
    return Math.random() * (max - min) + min;
}

const stockJson = require( './stocks.json' );

function getNextValue( currentValue: number, volatility: number ): number {
    volatility = volatility / 100;
    const random = getRandomArbitrary( 0, 1 );
    let changePercent = 2 * volatility * random;
    if ( changePercent > volatility ) {
        changePercent -= (2 * volatility);
    }
    const changeAmount = currentValue * changePercent;
    const nextAmount = currentValue + changeAmount;

    if ( nextAmount <= 0 ) {
        return getNextValue( currentValue, volatility );
    }
    return nextAmount;
}

function* loadinitialStocks() {
    let stocks: Stock[] = stockJson;

    // set Default values
    stocks.forEach( stock => {
        stock.quantity = 0;
        stock.valueChange = getRandomArbitrary( -10, 10 );
        stock.valueHistory = [];

        for ( let i = 720; i >= 0; i-- ) { // 720 = amount of 5 second blocks in the past
            const nextValue = getNextValue( stock.value, stock.volatility );
            stock.valueHistory.push( {
                value: nextValue,
                date: moment().subtract( i * 5, 'seconds' ).toDate(),
            } );
            stock.value = nextValue;
        }
    } );

    yield put( addStocks( stocks ) );
    yield put( calculateNextStockValues() );
}

function* buyOrSellStocks( action: BuyOrSellStockAction ) {
    // search the stock to buy
    let stocks: Stock[] = yield select( getStocks );
    const actionStock: Stock | undefined = stocks.find( s => s.name === action.stockName );

    if ( !actionStock ) {
        addNotification( {
            level: 'error',
            message: 'Stock with name ' + action.stockName + ' could not be found'
        } );
        return;
    }

    const accountValue = yield select( getAccountValue );

    // check if enought money
    const totalStockBuyValue = actionStock!.value * action.amount;
    if ( accountValue < totalStockBuyValue ) {
        addNotification( {
            level: 'error',
            message: 'Not enough Money'
        } );
        return;
    }

    // check if you can sell/buy amount of stocks
    if ( actionStock.quantity + action.amount < 0 ) {
        addNotification( {
            level: 'error',
            message: 'Cant sell stock you dont own'
        } );
        return;
    }

    // if it's get to here everything is valid

    // Buy Stocks
    // update stocks in Store
    yield put( changeStockQuantity( action.stockName, action.amount ) );
    yield put( changeAccountValue( -totalStockBuyValue ) );
    stocks = yield select( getStocks );
}

function* calculateAllNextStockValues() {
    const stocks: Stock[] = yield select( getStocks );
    const updates: UpdateStockData[] = [];

    for ( let s of stocks ) {
        let newValue = getNextValue( s.value, s.volatility );
        var valueHistory = cloneState( s.valueHistory );
        valueHistory.splice( 0, 1 ); // delete first entry
        valueHistory.push( {
            value: newValue,
            date: moment().toDate()
        } );

        const oldestValue = valueHistory[ 0 ].value;
        const valueChange = (newValue - oldestValue) / oldestValue * 100;

        updates.push( {
            stockName: s.name,
            stock: {
                ...s,
                valueHistory: valueHistory,
                value: newValue,
                valueChange: valueChange
            }
        } );
    }

    yield put( updateStocks( updates ) );
    yield delay( 5000 );
    yield put( calculateNextStockValues() );
}

function* stockMarketSaga() {
    yield takeEvery( LOAD_STOCKS, loadinitialStocks );
    yield takeEvery( BUY_OR_SELL_STOCKS, buyOrSellStocks );
    yield takeEvery( CALCULATE_NEXT_STOCK_VALUES, calculateAllNextStockValues );
}

export default stockMarketSaga;