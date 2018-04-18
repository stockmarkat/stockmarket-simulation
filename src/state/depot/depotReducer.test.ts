import depotReducer from './depotReducer';

describe( 'depotReducer', () => {
    it( 'should return init state', () => {
        let initState = depotReducer( undefined, { type: 'init' } );
        expect( initState ).not.toBeNull();
    } );

} );