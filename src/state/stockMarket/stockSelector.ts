import { AppState } from '../AppState';

export const getStocks = (state: AppState) => state.stockMarket.stocks;

// counts how many stocks the user owns
export const getOwnedStocksAmount = (state: AppState) => {
    let amount = 0;

    getStocks(state).forEach(s => {
        amount += s.quantity;
    });

    return amount;
};
