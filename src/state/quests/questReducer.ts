import { cloneState, GenericAction, QuestState } from '../AppState';
import { ADD_QUESTS, AddQuestAction, UPDATE_QUEST, UpdateQuestAction } from './questActions';

const initialState: QuestState = {
    quests: []
};

const questReducer = (state = initialState, action: GenericAction) => {
    switch (action.type) {
        case ADD_QUESTS: {
            const quests = (action as AddQuestAction).quests;

            return {
                ...state,
                quests
            };
        }

        case UPDATE_QUEST: {
            const quest = (action as UpdateQuestAction).quest;
            const clone = cloneState(state);

            const questIndex = clone.quests.findIndex(q => q.name === quest.name);
            clone.quests[questIndex] = {
                ...clone.quests[questIndex],
                ...quest
            };

            return clone;
        }

        default: {
            return state;
        }
    }

};

export default questReducer;