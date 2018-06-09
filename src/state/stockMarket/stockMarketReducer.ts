import { cloneState, GenericAction, StockMarketState } from '../AppState';
import { ADD_STOCKS, AddStocksAction, CHANGE_STOCK_QUANTITY, ChangeStockQuantityAction } from './stockMarketActions';

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

        case CHANGE_STOCK_QUANTITY: {
            const clone = cloneState(state);
            
            const name = (action as ChangeStockQuantityAction).name;
            const amount = (action as ChangeStockQuantityAction).amount;

            const index = clone.stocks.findIndex(s => s.name === name);
            clone.stocks[index].quantity += amount;

            return clone;
        }

        default: {
            return state;
        }
    }

};

export default stockMarketReducer;