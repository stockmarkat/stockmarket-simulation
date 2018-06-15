import { cloneState, GenericAction, StockMarketState } from '../AppState';
import {
    ADD_STOCKS,
    AddStocksAction,
    CHANGE_STOCK_QUANTITY,
    ChangeStockQuantityAction,
    UPDATE_STOCK, UPDATE_STOCKS, UpdateStockAction, UpdateStocksAction
} from './stockMarketActions';

const initialState: StockMarketState = {
    stocks: [],
};

const stockMarketReducer = ( state = initialState, action: GenericAction ) => {
        switch ( action.type ) {
            case ADD_STOCKS: {
                const stocks = (action as AddStocksAction).stocks;

                return {
                    ...state,
                    stocks
                };
            }

            case UPDATE_STOCK: {
                const updateStockAction = (action as UpdateStockAction);
                const clone = cloneState( state );
                const index = clone.stocks.findIndex( s => s.name === updateStockAction.stockName );

                clone.stocks[ index ] = { ...clone.stocks[ index ], ...updateStockAction.stock };

                return clone;
            }

            case UPDATE_STOCKS: {
                const updateStockAction = (action as UpdateStocksAction);
                const clone = cloneState( state );
                updateStockAction.updates.forEach( u => {
                    const index = clone.stocks.findIndex( s => s.name === u.stockName );
                    clone.stocks[ index ] = { ...clone.stocks[ index ], ...u.stock };

                } );

                return clone;
            }
            case
            CHANGE_STOCK_QUANTITY: {
                const clone = cloneState( state );

                const name = (action as ChangeStockQuantityAction).name;
                const amount = (action as ChangeStockQuantityAction).amount;

                const index = clone.stocks.findIndex( s => s.name === name );
                clone.stocks[ index ].quantity += amount;

                return clone;
            }

            default: {
                return state;
            }
        }

    }
;

export default stockMarketReducer;