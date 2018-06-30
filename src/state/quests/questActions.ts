import { Quest } from '../AppState';

export const LOAD_QUESTS = 'questsReducer/load-quests';
export const ADD_QUESTS = 'questsReducer/add-quests';
export const UPDATE_QUEST = 'questsReducer/update-quest';
export const RECALCULATE_QUESTS = 'questsReducer/recalculate-quests';

export const loadQuests = () => ({
    type: LOAD_QUESTS
});

export const recalculateQuests = () => ({
    type: RECALCULATE_QUESTS
});

export const addQuests = (quests: Quest[]): AddQuestAction => ({
    type: ADD_QUESTS,
    quests
});

export const updateQuest = (quest: Quest): UpdateQuestAction => ({
    type: UPDATE_QUEST,
    quest
});

export interface AddQuestAction {
    type: string;
    quests: Quest[];
}

export interface UpdateQuestAction {
    type: string;
    quest: Quest;
}