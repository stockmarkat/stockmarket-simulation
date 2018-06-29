import { call, put } from 'redux-saga/effects';
import { Goodie, Quest } from '../AppState';
import { changeAccountValue } from '../depot/depotActions';

export function* distributeGoodies(quest: Quest) {
    for (let goody of quest.goodies) {
        yield call(distributeGoodie, goody);
    }
}

function* distributeGoodie(goodie: Goodie) {
    switch (goodie.type) {
        case 'money':
            yield call(distributeMoneyGoodie, goodie);
        case 'stock':
            break;
    }
}

function* distributeMoneyGoodie(goodie: Goodie) {
    yield put(changeAccountValue(goodie.amount));
}