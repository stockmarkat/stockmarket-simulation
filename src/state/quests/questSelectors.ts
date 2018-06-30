import { createSelector } from 'reselect';
import { AppState, Quest } from '../AppState';

export const getQuests = (state: AppState) => state.quests.quests;

export const getCompletedQuests = createSelector(
    [getQuests],
    (quests: Quest[]) => {
        return quests.filter(q => q.isCompleted);
    }
);

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

export const getActiveQuests = createSelector(
    [getUnlockedQuests],
    (quests: Quest[]) => {
        return quests.filter(q => !q.isCompleted);
    }
);
