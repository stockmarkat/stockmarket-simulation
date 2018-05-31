import * as moment from 'moment';
import { put, select, takeEvery } from 'redux-saga/effects';
import { addNotification } from '../../components/NotificationSystem';
import { Stock } from '../AppState';
import { changeAccountValue, changeStockValue } from '../depot/depotActions';
import { getAccountValue } from '../depot/depotSelector';
import {
    addStocks,
    BUY_OR_SELL_STOCKS,
    BuyOrSellStockAction,
    changeStockQuantity,
    LOAD_STOCKS
} from './stockMarketActions';
import { getStocks } from './stockSelector';

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

function* buyOrSellStocks(action: BuyOrSellStockAction) {
    // search the stock to buy
    const stocks: Stock[] = yield select(getStocks);
    const actionStock: Stock | undefined = stocks.find(s => s.name === action.stockName);

    if (!actionStock) {
        addNotification({
            level: 'error',
            message: 'Stock with name ' + action.stockName + ' could not be found'
        });
        return;
    }

    const accountValue = yield select(getAccountValue);

    // check if enought money
    const totalStockBuyValue = actionStock!.value * action.amount;
    if (accountValue < totalStockBuyValue) {
        addNotification({
            level: 'error',
            message: 'Not enough Money'
        });
        return;
    }

    // Buy Stocks
    // update stocks in Store
    yield put(changeStockQuantity(action.stockName, action.amount));
    yield put(changeAccountValue(-totalStockBuyValue));
    yield put(changeStockValue(totalStockBuyValue));
}

function* stockMarketSaga() {
    yield takeEvery(LOAD_STOCKS, loadinitialStocks);
    yield takeEvery(BUY_OR_SELL_STOCKS, buyOrSellStocks);
}

export default stockMarketSaga;