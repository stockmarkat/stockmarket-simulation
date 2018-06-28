export interface Quest {
    name: string; // a Fancy name for this quest
    iconName: string; // a name of the Icon of this quest
    goodies: Goodie[]; // the goodies you earn if you complete this quest
    tasks: QuestTask[]; // the tasks you have to complete for this quest
    progress: number; // 0 - 100%
    isUnlocked: boolean; // is this quest unlocked
    isCompleted: boolean; // is this quest completed
    completed?: string; // when was this quest finished
}

export interface QuestTask {
    name: string; // describe the task
    progress: number; // 0 - 100% (set automatically)
    isCompleted: boolean; // is this Task Completed?
    questType: 'moneyPossession' | 'StockTotalPossession';
    amount: number; // the amount you should have for this task
}

export interface Goodie {
    type: 'money' | 'stock'; // the type of goodie
    stockName?: string; // only set if the Goodie is a Stock
    amount: number; // the amount you will earn
}

export interface Stock {
    name: string;
    value: number;
    volatility: number;
    valueChange: number; // for the last x Hours/days in %
    type: 'FireArms' | 'Energy' | 'Finance' | 'RawMaterials' | 'Technology';
    valueHistory: FinancialSnapshot[];
    quantity: number; // count of owned stocks
}

export interface FinancialSnapshot {
    value?: number;
    date: string;
}

interface NewsEffect {
    // TODO: tbd
}

export interface StockNews {
    text: string;
    isActive: boolean;
    effects: NewsEffect[];
}

export interface StockCategoryValue {
    categoryName: string;
    ratio: number;
}

export interface DepotState {
    accountValue: number;
    stockValueDevelopment: FinancialSnapshot[];
}

export interface StockMarketState {
    stocks: Stock[];
}

export interface NewsState {
    news: StockNews[];
}

export interface QuestState {
    quests: Quest[];
}

export interface AppState {
    depot: DepotState;
    stockMarket: StockMarketState;
    quests: QuestState;
    news: NewsState;
}

export interface GenericAction {
    type: string;
// tslint:disable-next-line: no-any
    payload?: any;
}

export function cloneState<T>( state: T ): T {
    return JSON.parse( JSON.stringify( state ) );
}