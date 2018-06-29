import { call, select } from 'redux-saga/effects';
import { QuestTask } from '../AppState';
import { getCapital } from '../depot/depotSelector';
import { getOwnedStocksAmount } from '../stockMarket/stockSelector';

export function* getTaskProgress(task: QuestTask) {
    let progress = 0;
    switch (task.questType) {
        case 'moneyPossession':
            progress = yield call(getMoneyPossessionTaskProgress, task);
            break;
        case 'StockTotalPossession':
            progress = yield call(getStockTotalPossessionTaskProgress, task);
            break;
        default:
            return 0;
    }

    if (progress > 100) {
        progress = 100;
    }

    return progress;
}

function* getMoneyPossessionTaskProgress(task: QuestTask) {
    const money = yield select(getCapital);
    return money * 100 / task.amount;
}

function* getStockTotalPossessionTaskProgress(task: QuestTask) {
    const ownedStockAmount = yield select(getOwnedStocksAmount);
    return ownedStockAmount * 100 / task.amount;
}