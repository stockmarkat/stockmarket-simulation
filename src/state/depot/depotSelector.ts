import { AppState, StockCategoryValue } from '../AppState';

export const getAccountValue = ( state: AppState ) => state.depot.accountValue;
export const getStockValue = ( state: AppState ) => {
    let value = 0;
    state.stockMarket.stocks.forEach( s => {
        value += s.value * s.quantity;
    } );
    return value;
};

export const getCapital = ( state: AppState ) => getAccountValue( state ) + getStockValue( state );

export const getStockValueDevelopment = (state: AppState) => state.depot.stockValueDevelopment;

export const getStockCategoryValues = ( state: AppState ) => {
    let categoryValues: StockCategoryValue[] = [];

    state.stockMarket.stocks.forEach( s => {
        let catIndex = categoryValues.findIndex( v => v.categoryName === s.type );
        if ( catIndex === -1 ) {
            categoryValues.push( { categoryName: s.type, ratio: s.quantity } );
        } else {
            categoryValues[ catIndex ].ratio += s.quantity;
        }
    } );

    // remove all categoryValues without any Value
    return categoryValues.filter( c => c.ratio > 0 );

};