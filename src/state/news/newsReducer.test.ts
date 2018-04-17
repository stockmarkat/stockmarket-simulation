import newsReducer from './newsReducer';

describe( 'questReducer', () => {
    it( 'should return init state', () => {
        let initState = newsReducer( undefined, { type: 'init' } );
        expect( initState ).not.toBeNull();
    } );
} );