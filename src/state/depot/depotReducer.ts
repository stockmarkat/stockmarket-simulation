import { DepotState, GenericAction } from '../AppState';

const initialState: DepotState = {
    accountValue: 0,
    stockValue: 0,
    stockValueDevelopment: [],
    stockCategoryValues: []
};

const depotReducer = (state = initialState, action: GenericAction) => {
    switch (action.type) {

        default: {
            return state;
        }
    }

};

export default depotReducer;