export interface Quest {
    name: string;
    iconName: string;
    goodies: Goodie[];
    tasks: QuestTask[];
    progress: number; // 0 - 100%
    isUnlocked: boolean;
    isCompleted: boolean;
    completed?: Date;
}

export interface QuestTask {
    name: string;
    progress: number; // 0 - 100%
    isCompleted: boolean;
    // TODO: find out how to determine if compleded
}

export interface Goodie {
    type: 'money' | 'stock';
    amount: number;
}

export interface Stock {
    name: string;
    value: number;
    volatility: number;
    valueChange: number; // for the last x Hours/days in %
    type: StockType;
    valueHistory: FinancialSnapshot[];
    quantity: number; // count of owned stocks
}

export type StockType = 'FireArms' | 'Energy' | 'Finance' | 'RawMaterials' | 'Technology';

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
    categoryName: StockType;
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