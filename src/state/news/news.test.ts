import { StockNews } from '../AppState';

const newsJson = require( './news.json' );

describe( 'news', () => {
    it( 'news should be valid', () => {
        let news: StockNews[] = newsJson;
        expect( news.length ).toBeGreaterThan( 0 );

        news.forEach( n => {
            expect( n.text ).not.toBeNull();
            expect( n.text.length ).toBeGreaterThan( 0 );
        } );
    } );
} );
