import { StockNews } from '../AppState';

export const LOAD_NEWS = 'newsreducer/load-news';
export const ADD_NEWS = 'newsreducer/add-news';

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