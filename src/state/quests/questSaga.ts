import { put, takeEvery } from 'redux-saga/effects';
import { Quest } from '../AppState';
import { addQuests, LOAD_QUESTS } from './questActions';

const questJson = require('./quests.json');

function* loadInitialQuests() {
    let quests: Quest[] = questJson;

    // set Default values

    quests.forEach(quest => {
        quest.progress = 0;
        quest.isCompleted = false;
        quest.isUnlocked = quest.isUnlocked ? quest.isUnlocked : false;
        quest.goodies = quest.goodies ? quest.goodies : [];
        quest.tasks = quest.tasks ? quest.tasks : [];
        quest.completed = undefined;
        quest.iconName = quest.iconName ? quest.iconName : 'defaultIcon';
    });

    yield put(addQuests(quests));
}

function* questSaga() {
    yield takeEvery(LOAD_QUESTS, loadInitialQuests);
}

export default questSaga;