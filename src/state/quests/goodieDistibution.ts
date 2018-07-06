import { call, put } from 'redux-saga/effects';
import { Goodie, Quest } from '../AppState';
import { changeAccountValue } from '../depot/depotActions';
import { changeStockQuantity } from '../stockMarket/stockMarketActions';

export function* distributeGoodies(quest: Quest) {
    for (let goody of quest.goodies) {
        yield call(distributeGoodie, goody);
    }
}

function* distributeGoodie(goodie: Goodie) {
    switch (goodie.type) {
        case 'money':
            yield call(distributeMoneyGoodie, goodie);
            return;
        case 'stock':
            yield call(distributeStockGoodie, goodie);
            break;
        default:
            return;
    }
}

function* distributeMoneyGoodie(goodie: Goodie) {
    yield put(changeAccountValue(goodie.amount));
}

function* distributeStockGoodie(goodie: Goodie) {
    if (goodie.stockName) {
        yield put(changeStockQuantity(goodie.stockName, goodie.amount));
    }
}