import { GenericAction, Stock } from '../AppState';

export const LOAD_STOCKS = 'stockMarketReducer/load-stocks';
export const ADD_STOCKS = 'stockMarketReducer/add-stocks';
export const CALCULATE_NEXT_STOCK_VALUES = 'stockMarketReducer/calculate-next-stock-values';
export const BUY_OR_SELL_STOCKS = 'stockMarketReducer/buy-or-sell-stocks';
export const CHANGE_STOCK_QUANTITY = 'stockMarketReducer/change-stock-quantity';
export const UPDATE_STOCK = 'stockMarketReducer/update-stock';
export const UPDATE_STOCKS = 'stockMarketReducer/update-stocks';

export const loadStocks = () => ({
    type: LOAD_STOCKS
});

export const calculateNextStockValues = (): GenericAction => ({
    type: CALCULATE_NEXT_STOCK_VALUES
});

export const addStocks = ( stocks: Stock[] ): AddStocksAction => ({
    type: ADD_STOCKS,
    stocks
});

export const buyOrSellStock = ( stockName: string, amount: number ): BuyOrSellStockAction => ({
    type: BUY_OR_SELL_STOCKS,
    stockName,
    amount
});

export const changeStockQuantity = ( name: string, amount: number ): ChangeStockQuantityAction => ({
    type: CHANGE_STOCK_QUANTITY,
    name,
    amount
});

export const updateStock = ( stockName: string, stock: Stock ): UpdateStockAction => ({
    type: UPDATE_STOCK,
    stockName,
    stock
});

export const updateStocks = ( updates: UpdateStockData[] ): UpdateStocksAction => ({
    type: UPDATE_STOCKS,
    updates
});

export interface UpdateStockData {
    stockName: string;
    stock: Stock;
}

export interface UpdateStocksAction {
    type: string;
    updates: UpdateStockData[];
}

export interface UpdateStockAction {
    type: string;
    stockName: string;
    stock: Stock;
}

export interface ChangeStockQuantityAction {
    type: string;
    name: string;
    amount: number;
}

export interface AddStocksAction {
    type: string;
    stocks: Stock[];
}

export interface BuyOrSellStockAction {
    type: string;
    stockName: string;
    amount: number;
}