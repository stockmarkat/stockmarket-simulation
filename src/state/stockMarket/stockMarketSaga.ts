import * as moment from 'moment';
import { put, takeEvery } from 'redux-saga/effects';
import { Stock } from '../AppState';
import { addStocks, BUY_OR_SELL_STOCKS, LOAD_STOCKS } from './stockMarketActions';

function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const stockJson = require('./stocks.json');

function* loadinitialStocks() {
    let stocks: Stock[] = stockJson;

    // set Default values

    stocks.forEach(stock => {
        stock.quantity = 0;
        stock.valueChange = getRandomArbitrary(-10, 10);
        stock.valueHistory = [
            {
                date: moment().subtract(5, 'minutes').toDate(),
                value: getRandomArbitrary(100, 300)
            },
            {
                date: moment().subtract(3, 'minutes').toDate(),
                value: getRandomArbitrary(100, 300)
            },
            {
                date: moment().subtract(1, 'minutes').toDate(),
                value: getRandomArbitrary(100, 300)
            }
        ];
    });

    yield put(addStocks(stocks));
}

function* buyOrSellStocks() {

}

function* stockMarketSaga() {
    yield takeEvery(LOAD_STOCKS, loadinitialStocks);
    yield takeEvery(BUY_OR_SELL_STOCKS, loadinitialStocks);
}

export default stockMarketSaga;