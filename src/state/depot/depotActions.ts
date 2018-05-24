import { FinancialSnapshot, StockCategoryValue } from '../AppState';

export const CHANGE_ACCOUNT_VALUE = 'depotReducer/change-account-value';
export const SET_ACCOUNT_VALUE = 'depotReducer/set-account-value';

export const CHANGE_STOCK_VALUE = 'depotReducer/change-stock-value';
export const SET_STOCK_VALUE = 'depotReducer/set-stock-value';

export const SET_CATEGORY_VALUES = 'depotReducer/set-category-value';
export const SET_STOCK_VALUE_DEVELOPMENT = 'depotReducer/set-stock-value-development';

export interface SetValueAction {
    type: string;
    value: number;
}

export const changeAccountValue = (changeAmount: number): SetValueAction => ({
    type: CHANGE_ACCOUNT_VALUE,
    value: changeAmount
});

export const setAccountValue = (value: number): SetValueAction => ({
    type: SET_ACCOUNT_VALUE,
    value
});

export const increaseStockValue = (changeAmount: number): SetValueAction => ({
    type: CHANGE_STOCK_VALUE,
    value: changeAmount
});

export const setStockValue = (value: number): SetValueAction => ({
    type: SET_STOCK_VALUE,
    value
});

export interface SetCategoryValueAction {
    type: string;
    values: StockCategoryValue[]
}

export const setCategoryValues = (values: StockCategoryValue[]): SetCategoryValueAction => ({
    type: SET_CATEGORY_VALUES,
    values
});

export interface SetFinancialSnapshotValuesAction {
    type: string;
    values: FinancialSnapshot[]
}

export const setStockValueDevelopment = (values: FinancialSnapshot[]): SetFinancialSnapshotValuesAction => ({
    type: SET_STOCK_VALUE_DEVELOPMENT,
    values
});