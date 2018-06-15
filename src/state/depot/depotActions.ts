import { FinancialSnapshot, GenericAction } from '../AppState';

export const CHANGE_ACCOUNT_VALUE = 'depotReducer/change-account-value';
export const SET_ACCOUNT_VALUE = 'depotReducer/set-account-value';
export const INIT_SNAPSHOT_CAPITAL = 'depotReducer/inti-snapshot-capital';
export const SNAPSHOT_CAPITAL = 'depotReducer/snapshot-capital';

export const SET_STOCK_VALUE_DEVELOPMENT = 'depotReducer/set-stock-value-development';

export interface SetValueAction {
    type: string;
    value: number;
}

export const initSnapshotCapital = (): GenericAction => ({
    type: INIT_SNAPSHOT_CAPITAL,
});

export const snapshotCapital = (): GenericAction => ({
    type: SNAPSHOT_CAPITAL,
});

export const changeAccountValue = ( changeAmount: number ): SetValueAction => ({
    type: CHANGE_ACCOUNT_VALUE,
    value: changeAmount
});

export const setAccountValue = ( value: number ): SetValueAction => ({
    type: SET_ACCOUNT_VALUE,
    value
});

export interface SetFinancialSnapshotValuesAction {
    type: string;
    values: FinancialSnapshot[];
}

export const setStockValueDevelopment = ( values: FinancialSnapshot[] ): SetFinancialSnapshotValuesAction => ({
    type: SET_STOCK_VALUE_DEVELOPMENT,
    values
});