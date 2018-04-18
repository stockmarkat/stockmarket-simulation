import stockMarketReducer from './stockMarketReducer';

describe('stockMarketReducer', () => {
    it('should return init state', () => {
        let initState = stockMarketReducer(undefined, { type: 'init' });
        expect(initState).not.toBeNull();
    });
});