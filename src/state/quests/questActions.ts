import { Quest } from '../AppState';

export const LOAD_QUESTS = 'questsReducer/load-quests';
export const ADD_QUESTS = 'questsReducer/add-quests';

export const loadQuests = () => ({
    type: LOAD_QUESTS
});

export const addQuests = (quests: Quest[]): AddQuestAction => ({
    type: ADD_QUESTS,
    quests
});

export interface AddQuestAction {
    type: string;
    quests: Quest[];
}