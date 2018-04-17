import { GenericAction, NewsState } from '../AppState';

const initialState: NewsState = {
    news: []
};

const newsReducer = ( state = initialState, action: GenericAction ) => {
    switch ( action.type ) {
        default: {
            return state;
        }
    }

};

export default newsReducer;