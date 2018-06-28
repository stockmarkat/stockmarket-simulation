import { GenericAction, NewsState } from '../AppState';
import { ADD_NEWS, AddNewsAction } from './newsActions';

const initialState: NewsState = {
    news: []
};

const newsReducer = (state = initialState, action: GenericAction) => {
    switch (action.type) {
        case ADD_NEWS: {
            const newNews = (action as AddNewsAction).quests;
            return {
                news: newNews
            };
        }
        default: {
            return state;
        }
    }

};

export default newsReducer;