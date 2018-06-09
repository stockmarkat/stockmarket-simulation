import { AppState } from '../AppState';

export const getStocks = (state: AppState) => state.stockMarket.stocks;
