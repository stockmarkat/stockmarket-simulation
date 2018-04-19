import { cloneState, GenericAction, StockMarketState } from '../AppState';
import { ADD_STOCKS, AddStocksAction, BUY_OR_SELL_STOCKS, BuyOrSellStocksAction } from './stockMarketActions';

const initialState: StockMarketState = {
    stocks: [],
};

const stockMarketReducer = (state = initialState, action: GenericAction) => {
    switch (action.type) {
        case ADD_STOCKS: {
            const stocks = (action as AddStocksAction).stocks;

            return {
                ...state,
                stocks
            };
        }

        case BUY_OR_SELL_STOCKS: {
            const clone = cloneState(state);
            const operations = (action as BuyOrSellStocksAction).operations;

            operations.forEach(o => {
                const index = clone.stocks.findIndex(s => s.name === o.stockName);
                clone.stocks[index].quantity += o.amount;
            });
            return clone;
        }

        default: {
            return state;
        }
    }

};

export default stockMarketReducer;