export const CHANGE_ACCOUNT_VALUE = 'depotReducer/change-account-value';
export const SET_ACCOUNT_VALUE = 'depotReducer/set-account-value';

export const CHANGE_STOCK_VALUE = 'depotReducer/change-stock-value';
export const SET_STOCK_VALUE = 'depotReducer/set-stock-value';

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
