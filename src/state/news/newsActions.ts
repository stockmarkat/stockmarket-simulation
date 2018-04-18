import { StockNews } from '../AppState';

export const LOAD_NEWS = 'questsReducer/load-quests';
export const ADD_NEWS = 'questsReducer/add-quests';

export const loadNews = () => ({
    type: LOAD_NEWS
});

export const addNews = ( quests: StockNews[] ): AddNewsAction => ({
    type: ADD_NEWS,
    quests
});

export interface AddNewsAction {
    type: string;
    quests: StockNews[];
}