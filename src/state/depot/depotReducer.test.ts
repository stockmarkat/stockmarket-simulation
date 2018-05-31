import { FinancialSnapshot, StockCategoryValue } from '../AppState';
import {
    changeAccountValue,
    changeTotalStockValue,
    setAccountValue,
    setCategoryValues,
    setStockValue,
    setStockValueDevelopment
} from './depotActions';
import depotReducer from './depotReducer';

describe('depotReducer', () => {
    it('should return init state', () => {
        let initState = depotReducer(undefined, { type: 'init' });
        expect(initState).not.toBeNull();
    });

    it('should set CategoryValues', () => {
        const values: StockCategoryValue[] = [
            {
                categoryName: 'Category1',
                ratio: 5
            },
            {
                categoryName: 'Category2',
                ratio: 4
            },
            {
                categoryName: 'Category3',
                ratio: 6
            },
            {
                categoryName: 'Category4',
                ratio: 7
            }
        ];

        let initState = depotReducer(undefined, setCategoryValues(values));
        expect(initState).not.toBeNull();
        expect(initState.stockCategoryValues).toBe(values);
    });

    it('should set CategoryValues', () => {
        const values: FinancialSnapshot[] = [
            {
                date: new Date(),
                value: 5
            },
            {
                date: new Date(),
                value: 5
            },
            {
                date: new Date(),
                value: 5
            }
        ];

        let initState = depotReducer(undefined, setStockValueDevelopment(values));
        expect(initState).not.toBeNull();
        expect(initState.stockValueDevelopment).toBe(values);
    });

    describe('accountValue', () => {
        it('should set accountValue', () => {
            let state = depotReducer(undefined, setAccountValue(5));
            expect(state).not.toBeNull();
            expect(state.accountValue).toBe(5);
        });

        it('should change accountValue positive', () => {
            let state = depotReducer(undefined, setAccountValue(5));
            expect(state).not.toBeNull();
            expect(state.accountValue).toBe(5);

            state = depotReducer(state, changeAccountValue(5));
            expect(state).not.toBeNull();
            expect(state.accountValue).toBe(10);
        });

        it('should change accountValue negative', () => {
            let state = depotReducer(undefined, setAccountValue(5));
            expect(state).not.toBeNull();
            expect(state.accountValue).toBe(5);

            state = depotReducer(state, changeAccountValue(-2));
            expect(state).not.toBeNull();
            expect(state.accountValue).toBe(3);
        });
    });

    describe('stockValue', () => {
        it('should set stockValue', () => {
            let state = depotReducer(undefined, setStockValue(5));
            expect(state).not.toBeNull();
            expect(state.stockValue).toBe(5);
        });

        it('should change stockValue positive', () => {
            let state = depotReducer(undefined, setStockValue(5));
            expect(state).not.toBeNull();
            expect(state.stockValue).toBe(5);

            state = depotReducer(state, changeTotalStockValue(5));
            expect(state).not.toBeNull();
            expect(state.stockValue).toBe(10);
        });

        it('should change stockValue negative', () => {
            let state = depotReducer(undefined, setStockValue(5));
            expect(state).not.toBeNull();
            expect(state.stockValue).toBe(5);

            state = depotReducer(state, changeTotalStockValue(-2));
            expect(state).not.toBeNull();
            expect(state.stockValue).toBe(3);
        });
    });
});