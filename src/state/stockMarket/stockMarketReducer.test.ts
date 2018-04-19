import { StockMarketState } from '../AppState';
import { buyOrSellStocks, StockPurchaseOperation } from './stockMarketActions';
import stockMarketReducer from './stockMarketReducer';

describe('stockMarketReducer', () => {
    it('should return init state', () => {
        let initState = stockMarketReducer(undefined, { type: 'init' });
        expect(initState).not.toBeNull();
    });

    it('should add Stock via Action', () => {
        const initState: StockMarketState = {
            stocks: [
                {
                    quantity: 0,
                    name: 'teststock',
                    valueHistory: [],
                    valueChange: 5,
                    value: 100,
                    type: 'Energy'
                }
            ]
        };

        const operation: StockPurchaseOperation = {
            amount: 5,
            stockName: 'teststock'

        };
        let state = stockMarketReducer(initState, buyOrSellStocks([operation]));
        expect(state.stocks[0].quantity).toEqual(5);
    });

    it('should remove Stock via Action', () => {
        const initState: StockMarketState = {
            stocks: [
                {
                    quantity: 5,
                    name: 'teststock',
                    valueHistory: [],
                    valueChange: 5,
                    value: 100,
                    type: 'Energy'
                }
            ]
        };

        const operation: StockPurchaseOperation = {
            amount: -2,
            stockName: 'teststock'

        };
        let state = stockMarketReducer(initState, buyOrSellStocks([operation]));
        expect(state.stocks[0].quantity).toEqual(3);
    });
});