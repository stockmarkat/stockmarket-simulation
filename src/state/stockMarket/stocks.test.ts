import { Stock } from '../AppState';

const stockJson = require('./stocks.json');

describe('stocks', () => {
    it('stocks should be valid', () => {
        let stocks: Stock[] = stockJson;
        expect(stocks.length).toBeGreaterThan(0);

        stocks.forEach(s => {
            // volatility
            expect(s.volatility).toBeGreaterThan(0);

            // name
            expect(s.name).not.toBeNull();
            expect(s.name.length).toBeGreaterThan(0);

            // value
            expect(s.value).not.toBeNull();
            expect(s.value).toBeGreaterThan(0);

        });
    });

    it('stocks.volatility should be valid', () => {
        let stocks: Stock[] = stockJson;
        expect(stocks.length).toBeGreaterThan(0);

        stocks.forEach(s => {
            // volatility
            expect(s.volatility).toBeGreaterThan(0);
        });
    });

    it('stocks.name should be valid', () => {
        let stocks: Stock[] = stockJson;
        expect(stocks.length).toBeGreaterThan(0);

        stocks.forEach(s => {

            // name
            expect(s.name).not.toBeNull();
            expect(s.name.length).toBeGreaterThan(0);

        });
    });

    it('stocks.value should be valid', () => {
        let stocks: Stock[] = stockJson;
        expect(stocks.length).toBeGreaterThan(0);

        stocks.forEach(s => {

            // value
            expect(s.value).not.toBeNull();
            expect(s.value).toBeGreaterThan(0);

        });
    });

});