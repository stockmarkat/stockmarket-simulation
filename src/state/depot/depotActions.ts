export const INCREASE_ACCOUNT_VALUE = 'depotReducer/increase-account-value';
export const DECREASE_ACCOUNT_VALUE = 'depotReducer/decrease-account-value';
export const SET_ACCOUNT_VALUE = 'depotReducer/set-account-value';

export const INCREASE_STOCK_VALUE = 'depotReducer/increase-stock-value';
export const DECREASE_STOCK_VALUE = 'depotReducer/decrease-stock-value';
export const SET_STOCK_VALUE = 'depotReducer/set-stock-value';

export interface SetValueAction {
    type: string;
    value: number;
}

export const increaseAccountValue = (value: number): SetValueAction => ({
    type: INCREASE_ACCOUNT_VALUE,
    value
});

export const decreaseAccountValue = (value: number): SetValueAction => ({
    type: DECREASE_ACCOUNT_VALUE,
    value
});

export const setAccountValue = (value: number): SetValueAction => ({
    type: SET_ACCOUNT_VALUE,
    value
});

export const increaseStockValue = (value: number): SetValueAction => ({
    type: INCREASE_STOCK_VALUE,
    value
});

export const decreaseStockValue = (value: number): SetValueAction => ({
    type: DECREASE_STOCK_VALUE,
    value
});

export const setStockValue = (value: number): SetValueAction => ({
    type: SET_STOCK_VALUE,
    value
});
