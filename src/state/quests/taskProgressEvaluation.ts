import { call, select } from 'redux-saga/effects';
import { QuestTask, Stock, StockCategoryValue } from '../AppState';
import { getCapital, getStockCategoryValues, getStockValue } from '../depot/depotSelector';
import { getOwnedStocksAmount, getStocks } from '../stockMarket/stockSelector';

export function* getTaskProgress( task: QuestTask ) {
    let progress = 0;
    switch (task.questType) {
        case 'MoneyPossession':
            progress = yield call( getMoneyPossessionTaskProgress, task );
            break;
        case 'StockTotalPossession':
            progress = yield call( getStockTotalPossessionTaskProgress, task );
            break;
        case 'StockInvestmentPercent':
            progress = yield call( getStockInvestmentPercentTaskProgress, task );
            break;
        case 'CategoryPercentPossession':
            progress = yield call( getCategoryPercentPossessionTaskProgress, task );
            break;
        case 'StockPercentPossesion':
            progress = yield call( getStockPercentPossessionTaskProgress, task );
            break;
        default:
            return 0;
    }

    if (progress > 100) {
        progress = 100;
    }

    return progress;
}

function* getStockInvestmentPercentTaskProgress( task: QuestTask ) {
    const totalCapital = yield select( getCapital );
    const stocks = yield select( getStockValue );

    const investPercent = stocks * 100 / totalCapital;
    return investPercent * 100 / task.amount;
}

function* getCategoryPercentPossessionTaskProgress( task: QuestTask ) {
    // getAll categories
    const categories: StockCategoryValue[] = yield select( getStockCategoryValues );

    // search category
    const category = categories.find( c => c.categoryName === task.typeName );

    // no stocks of this category
    if (!category) {
        return 0;
    }

    // total per cent calculation
    return category.ratio * 100 / task.amount;
}

function* getStockPercentPossessionTaskProgress( task: QuestTask ) {
    const stocks: Stock[] = yield select( getStocks );
    const wantedStock = stocks.find( ( stock ) => stock.name === task.typeName );

    const stockQuantity = yield select( getOwnedStocksAmount );

    const percentOwnedOfStock = wantedStock!.quantity / (stockQuantity / 100);
    return percentOwnedOfStock * 100 / task.amount;
}

function* getMoneyPossessionTaskProgress( task: QuestTask ) {
    const money = yield select( getCapital );
    return money * 100 / task.amount;
}

function* getStockTotalPossessionTaskProgress( task: QuestTask ) {
    const ownedStockAmount = yield select( getOwnedStocksAmount );
    return ownedStockAmount * 100 / task.amount;
}