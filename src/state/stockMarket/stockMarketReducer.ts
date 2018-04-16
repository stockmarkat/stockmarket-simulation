import { GenericAction, StockMarketState } from '../AppState';

const initialState: StockMarketState = {
    stocks: []
};

const stockMarketReducer = (state = initialState, action: GenericAction) => {
    switch (action.type) {

        default: {
            return state;
        }
    }

};

export default stockMarketReducer;