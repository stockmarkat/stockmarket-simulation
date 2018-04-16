import { DepotState, GenericAction } from '../AppState';
import { SET_ACCOUNT_VALUE, SET_STOCK_VALUE, SetValueAction } from './depotActions';

const initialState: DepotState = {
    accountValue: 0,
    stockValue: 0,
    stockValueDevelopment: [],
    stockCategoryValues: []
};

// TODO: implement increase and decrease of accountValue and stockValue
// TODO: implement add stockValueDevelopment
// TODO: implement set stockCategoryValues

const depotReducer = (state = initialState, action: GenericAction) => {
    switch (action.type) {

        case SET_ACCOUNT_VALUE: {
            const value = (action as SetValueAction).value;
            return {
                ...state,
                accountValue: value
            };
        }

        case SET_STOCK_VALUE: {
            const value = (action as SetValueAction).value;
            return {
                ...state,
                stockValue: value
            };
        }

        default: {
            return state;
        }
    }

};

export default depotReducer;