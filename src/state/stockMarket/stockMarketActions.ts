import { Stock } from '../AppState';

export const LOAD_STOCKS = 'stockMarketReducer/load-stocks';
export const ADD_STOCKS = 'stockMarketReducer/add-stocks';
export const BUY_OR_SELL_STOCKS = 'stockMarketReducer/buy-or-sell-stocks';
export const CHANGE_STOCK_QUANTITY = 'stockMarketReducer/change-stock-quantity';

export const loadStocks = () => ({
    type: LOAD_STOCKS
});

export const addStocks = (stocks: Stock[]): AddStocksAction => ({
    type: ADD_STOCKS,
    stocks
});

export const buyOrSellStocks = (operations: StockPurchaseOperation[]): BuyOrSellStocksAction => ({
    type: BUY_OR_SELL_STOCKS,
    operations
});

export const changeStockQuantity = (name: string, amount: number): ChangeStockQuantityAction => ({
    type: CHANGE_STOCK_QUANTITY,
    name,
    amount
});

export interface ChangeStockQuantityAction {
    type: string;
    name: string;
    amount: number;
}

export interface AddStocksAction {
    type: string;
    stocks: Stock[];
}

export interface StockPurchaseOperation {
    stockName: string;
    amount: number; // make this negative if you want to sell a Stock
}

export interface BuyOrSellStocksAction {
    type: string;
    operations: StockPurchaseOperation[];
}