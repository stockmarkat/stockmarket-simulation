interface StockMarketConfiguration {
    // the last n minutes that should in diagrams
    lastMinutes: number;

    // the interval in second of when to generate a new point
    interval: number;

    // the amount of point that will be in the chart
    points: () => number;
}

interface QuestConfig {
    // the interval in seconds of when to recalculate the quest state
    updateInterval: number;

    // the amount of quest that should be active at the same time
    activeQuests: number;
}

export const QuestConfig: QuestConfig = {
    updateInterval: 2,
    activeQuests: 3
};

export const StockConfig: StockMarketConfiguration = {
    interval: 2,
    lastMinutes: 10,
    points: () => StockConfig.lastMinutes * 60 / StockConfig.interval
};

export const CapitalConfig: StockMarketConfiguration = {
    interval: 2,
    lastMinutes: 20,
    points: () => CapitalConfig.lastMinutes * 60 / CapitalConfig.interval
};
