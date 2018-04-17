import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { AppState } from './AppState';
import depotReducer from './depot/depotReducer';
import depotSaga from './depot/depotSaga';
import initialLoadSaga from './initialLoad/initialLoadSaga';
import newsReducer from './news/newsReducer';
import questReducer from './quests/questReducer';
import questSaga from './quests/questSaga';
import stockMarketReducer from './stockMarket/stockMarketReducer';
import stockMarketSaga from './stockMarket/stockMarketSaga';

function* rootSaga() {
    yield all(
        [
            fork( initialLoadSaga ),
            fork( questSaga ),
            fork( depotSaga ),
            fork( stockMarketSaga ),
        ]
    );
}

export const rootreducer = combineReducers<AppState>( {
    depot: depotReducer,
    stockMarket: stockMarketReducer,
    quests: questReducer,
    news: newsReducer,
} );

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleWaresToApply = [
        sagaMiddleware
    ];
    const middleware = applyMiddleware( ...middleWaresToApply );
    const store = createStore( rootreducer, composeWithDevTools( middleware ) );

    sagaMiddleware.run( rootSaga );
    return store;
};
