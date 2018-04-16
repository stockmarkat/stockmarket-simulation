import { GenericAction, QuestState } from '../AppState';
import { ADD_QUESTS, AddQuestAction } from './questActions';

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

        default: {
            return state;
        }
    }

};

export default questReducer;