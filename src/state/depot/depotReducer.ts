import { DepotState, GenericAction } from '../AppState';
import {
    CHANGE_ACCOUNT_VALUE,
    SET_ACCOUNT_VALUE,
    SET_STOCK_VALUE_DEVELOPMENT,
    SetFinancialSnapshotValuesAction,
    SetValueAction
} from './depotActions';

const initialState: DepotState = {
    accountValue: 10000,
    stockValueDevelopment: []
};

const depotReducer = ( state = initialState, action: GenericAction ) => {
    switch ( action.type ) {

        case SET_ACCOUNT_VALUE: {
            const value = (action as SetValueAction).value;
            return {
                ...state,
                accountValue: value
            };
        }

        case CHANGE_ACCOUNT_VALUE: {
            const value = (action as SetValueAction).value;
            return {
                ...state,
                accountValue: state.accountValue + value
            };
        }

        case SET_STOCK_VALUE_DEVELOPMENT: {
            const values = (action as SetFinancialSnapshotValuesAction).values;
            return {
                ...state,
                stockValueDevelopment: values
            };
        }

        default: {
            return state;
        }
    }

};

export default depotReducer;