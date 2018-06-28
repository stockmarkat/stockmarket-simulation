import { FinancialSnapshot } from '../AppState';
import { changeAccountValue, setAccountValue, setStockValueDevelopment } from './depotActions';
import depotReducer from './depotReducer';

describe( 'depotReducer', () => {
    it( 'should return init state', () => {
        let initState = depotReducer( undefined, { type: 'init' } );
        expect( initState ).not.toBeNull();
    } );

    it( 'should set CategoryValues', () => {
        const values: FinancialSnapshot[] = [
            {
                date: '15:30',
                value: 5
            },
            {
                date: '15:30',
                value: 5
            },
            {
                date: '15:30',
                value: 5
            }
        ];

        let initState = depotReducer( undefined, setStockValueDevelopment( values ) );
        expect( initState ).not.toBeNull();
        expect( initState.stockValueDevelopment ).toBe( values );
    } );

    describe( 'accountValue', () => {
        it( 'should set accountValue', () => {
            let state = depotReducer( undefined, setAccountValue( 5 ) );
            expect( state ).not.toBeNull();
            expect( state.accountValue ).toBe( 5 );
        } );

        it( 'should change accountValue positive', () => {
            let state = depotReducer( undefined, setAccountValue( 5 ) );
            expect( state ).not.toBeNull();
            expect( state.accountValue ).toBe( 5 );

            state = depotReducer( state, changeAccountValue( 5 ) );
            expect( state ).not.toBeNull();
            expect( state.accountValue ).toBe( 10 );
        } );

        it( 'should change accountValue negative', () => {
            let state = depotReducer( undefined, setAccountValue( 5 ) );
            expect( state ).not.toBeNull();
            expect( state.accountValue ).toBe( 5 );

            state = depotReducer( state, changeAccountValue( -2 ) );
            expect( state ).not.toBeNull();
            expect( state.accountValue ).toBe( 3 );
        } );
    } );
} );