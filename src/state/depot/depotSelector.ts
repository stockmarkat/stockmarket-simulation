import { createSelector } from 'reselect';
import { AppState, StockCategoryValue } from '../AppState';
import { getStocks } from '../stockMarket/stockSelector';

export const getAccountValue = ( state: AppState ) => state.depot.accountValue;
export const getStockValue = createSelector( getStocks, ( stocks ) => {
    return stocks.reduce( ( acc, item ) => acc + item.value * item.quantity, 0 );
} );

export const getCapital = ( state: AppState ) => getAccountValue( state ) + getStockValue( state );

export const getStockValueDevelopment = ( state: AppState ) => state.depot.stockValueDevelopment;

export const getStockCategoryValues = ( state: AppState ) => {
    let categoryValues: StockCategoryValue[] = [];
    let totalQuantity = 0;

    state.stockMarket.stocks.forEach( s => {
        let catIndex = categoryValues.findIndex( v => v.categoryName === s.type );
        if (catIndex === -1) {
            categoryValues.push( {categoryName: s.type, ratio: s.quantity} );
        } else {
            categoryValues[catIndex].ratio += s.quantity;
        }
        totalQuantity += s.quantity;
    } );

    // remove all categoryValues without any Value
    categoryValues = categoryValues.filter( c => c.ratio > 0 );

    categoryValues.forEach( c => {
        c.ratio = c.ratio * 100 / totalQuantity;
    } );

    return categoryValues;
};

export const getPossessedStocks = ( state: AppState ) =>
    state.stockMarket.stocks.filter( stock => stock.quantity > 0 );