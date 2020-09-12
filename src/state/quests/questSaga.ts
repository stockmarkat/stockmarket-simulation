import { call, delay, put, select, takeEvery } from 'redux-saga/effects';
import { addNotification } from '../../components/NotificationSystem';
import { Quest } from '../AppState';
import { QuestConfig as Config } from '../Config';
import { distributeGoodies } from './goodieDistibution';
import { LOAD_QUESTS, RECALCULATE_QUESTS, addQuests, recalculateQuests, updateQuest } from './questActions';
import { getActiveQuests, getLockedQuests, getQuests } from './questSelectors';
import { getTaskProgress } from './taskProgressEvaluation';

const questJson = require('./quests.json');

function* loadInitialQuests() {
    let quests: Quest[] = questJson;

    const loadedQuest: Quest[] = yield select(getQuests);

    if (loadedQuest && loadedQuest.length > 0) {
        yield put(recalculateQuests());
        return;
    }
    // set Default values

    quests.forEach(quest => {
        quest.progress = 0;
        quest.isCompleted = false;
        quest.isUnlocked = quest.isUnlocked ? quest.isUnlocked : false;
        quest.goodies = quest.goodies ? quest.goodies : [];

        quest.tasks.forEach(t => {
            t.progress = 0;
            t.isCompleted = false;
        });

        quest.tasks = quest.tasks ? quest.tasks : [];
        quest.completed = undefined;
        quest.iconName = quest.iconName ? quest.iconName : 'defaultIcon';
    });

    yield put(addQuests(quests));
    yield put(recalculateQuests());
}

function* recalculateAllQuests() {

    const activeQuests: Quest[] = yield select(getActiveQuests);

    for (let q of activeQuests) {
        let totalProgress = 0;
        for (let t of q.tasks) {
            const progress: number = yield call(getTaskProgress, t);
            t.progress = progress;
            totalProgress += progress;
            t.isCompleted = progress === 100;
        }
        q.progress = totalProgress / q.tasks.length;
        if (q.progress === 100) {
            q.isCompleted = true;
            q.completed = new Date();
            notifyUserQuestComplete(q);
            yield call(distributeGoodies, q);
        }

        yield put(updateQuest(q));
    }
    yield call(unlockQuests);
    yield delay(Config.updateInterval * 1000);
    yield put(recalculateQuests());
}

function* unlockQuests() {
    const activeQuests: Quest[] = yield select(getActiveQuests);
    if (activeQuests.length < Config.activeQuests) {
        const lockedQuests: Quest[] = yield select(getLockedQuests);
        let amountOfQuestToUnlock = Config.activeQuests - activeQuests.length;
        for (let lockedQuest of lockedQuests) {
            lockedQuest.isUnlocked = true;
            yield put(updateQuest(lockedQuest));
            amountOfQuestToUnlock--;
            if (amountOfQuestToUnlock === 0) {
                return;
            }

        }
    }

}

function notifyUserQuestComplete(q: Quest) {
    addNotification({
        level: 'success',
        message: q.name,
        title: 'Quest completed'
    });
}

function* questSaga() {
    yield takeEvery(LOAD_QUESTS, loadInitialQuests);
    yield takeEvery(RECALCULATE_QUESTS, recalculateAllQuests);
}

export default questSaga;