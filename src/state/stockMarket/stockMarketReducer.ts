import { GenericAction, StockMarketState } from '../AppState';
import { ADD_STOCKS, AddStocksAction } from './stockMarketActions';

const initialState: StockMarketState = {
    stocks: [],
    news: [],
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
        default: {
            return state;
        }
    }

};

export default stockMarketReducer;