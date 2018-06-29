import * as moment from 'moment';
import { delay } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { Quest, QuestTask } from '../AppState';
import { QuestConfig as Config } from '../Config';
import { getCapital } from '../depot/depotSelector';
import { calculateNextStockValues } from '../stockMarket/stockMarketActions';
import { addQuests, LOAD_QUESTS, RECALCULATE_QUESTS, recalculateQuests, updateQuest } from './questActions';
import { getActiveQuests } from './questSelectors';

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
    yield put(recalculateQuests());
}

function* getTaskProgress(task: QuestTask) {
    switch (task.questType) {
        case 'moneyPossession':
            return yield call(getMoneyPossessionTaskProgress, task);
        case 'StockTotalPossession':
            break;
        default:
            return 0;
    }
}

function* getMoneyPossessionTaskProgress(task: QuestTask) {
    const money = yield select(getCapital);
    return money * 100 / task.amount;
}

function* recalculateAllQuests() {

    const activeQuests: Quest[] = yield select(getActiveQuests);

    for (let q of activeQuests) {
        let allTaskComplete = false;
        let totalProgress = 0;
        for (let t of q.tasks) {
            const progress: number = yield call(getTaskProgress, t);
            t.progress = progress;
            totalProgress += progress;
            if (progress === 100) {
                t.isCompleted = true;
            } else {
                allTaskComplete = false;
            }
        }
        q.isCompleted = allTaskComplete;
        q.progress = totalProgress / q.tasks.length;
        if (q.progress === 100) {
            q.isCompleted = true;
            q.completed = moment().format('hh:mm');
        }

        yield put(updateQuest(q));
    }
    yield delay(Config.updateInterval * 1000);
    yield put(calculateNextStockValues());
}

function* questSaga() {
    yield takeEvery(LOAD_QUESTS, loadInitialQuests);
    yield takeEvery(RECALCULATE_QUESTS, recalculateAllQuests);
}

export default questSaga;