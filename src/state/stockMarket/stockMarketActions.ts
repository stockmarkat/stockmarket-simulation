import { Stock } from '../AppState';

export const LOAD_STOCKS = 'stockMarketReducer/load-stocks';
export const ADD_STOCKS = 'stockMarketReducer/add-stocks';
export const BUY_STOCK = 'stockMarketReducer/buy-stock';
export const SELL_STOCK = 'stockMarketReducer/sell-stock';

export const loadStocks = () => ({
    type: LOAD_STOCKS
});

export const addStocks = (stocks: Stock[]): AddStocksAction => ({
    type: ADD_STOCKS,
    stocks
});

export const buyStock = (stockName: string, amount: number): PurchaseStockAction => ({
    type: BUY_STOCK,
    amount,
    stockName
});

export const sellStock = (stockName: string, amount: number): PurchaseStockAction => ({
    type: SELL_STOCK,
    amount,
    stockName
});

export interface AddStocksAction {
    type: string;
    stocks: Stock[];
}

export interface PurchaseStockAction {
    type: string;
    stockName: string;
    amount: number;
}