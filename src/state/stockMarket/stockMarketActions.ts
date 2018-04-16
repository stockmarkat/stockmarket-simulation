import { Stock } from '../AppState';

export const LOAD_STOCKS = 'stockMarketReducer/load-stocks';
export const ADD_STOCKS = 'stockMarketReducer/add-stocks';

export const loadStocks = () => ({
    type: LOAD_STOCKS
});

export const addStocks = (stocks: Stock[]): AddStocksAction => ({
    type: ADD_STOCKS,
    stocks
});

export interface AddStocksAction {
    type: string;
    stocks: Stock[];
}