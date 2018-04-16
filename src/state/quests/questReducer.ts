import { GenericAction, QuestState } from '../AppState';

const initialState: QuestState = {
    quests: []
};

const questReducer = (state = initialState, action: GenericAction) => {
    switch (action.type) {

        default: {
            return state;
        }
    }

};

export default questReducer;