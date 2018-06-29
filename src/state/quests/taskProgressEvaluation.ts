import { call, select } from 'redux-saga/effects';
import { QuestTask } from '../AppState';
import { getCapital } from '../depot/depotSelector';
import { getOwnedStocksAmount } from '../stockMarket/stockSelector';

export function* getTaskProgress(task: QuestTask) {
    switch (task.questType) {
        case 'moneyPossession':
            return yield call(getMoneyPossessionTaskProgress, task);
        case 'StockTotalPossession':
            return yield call(getStockTotalPossessionTaskProgress, task);
        default:
            return 0;
    }
}

function* getMoneyPossessionTaskProgress(task: QuestTask) {
    const money = yield select(getCapital);
    return money * 100 / task.amount;
}

function* getStockTotalPossessionTaskProgress(task: QuestTask) {
    const ownedStockAmount = yield select(getOwnedStocksAmount);
    return ownedStockAmount * 100 / task.amount;
}