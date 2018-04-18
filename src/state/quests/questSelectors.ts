import { createSelector } from 'reselect';
import { AppState, Quest } from '../AppState';

export const getQuests = (state: AppState) => state.quests.quests;

export const getUnlockedQuests = createSelector(
    [getQuests],
    (quests: Quest[]) => {
        return quests.filter(q => q.isUnlocked);
    }
);

export const getLockedQuests = createSelector(
    [getQuests],
    (quests: Quest[]) => {
        return quests.filter(q => !q.isUnlocked);
    }
);