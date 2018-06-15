import { StockMarketState } from '../AppState';
import { changeStockQuantity } from './stockMarketActions';
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
                    type: 'Energy',
                    volatility: 5
                }
            ]
        };

        let state = stockMarketReducer(initState, changeStockQuantity('teststock', 5));
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
                    type: 'Energy',
                    volatility: 5
                }
            ]
        };

        let state = stockMarketReducer(initState, changeStockQuantity('teststock', -2));
        expect(state.stocks[0].quantity).toEqual(3);
    });
});