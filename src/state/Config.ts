interface StockMarketConfiguration {
    // the last n minutes that should in diagrams
    lastMinutes: number;

    // the interval in second of when to generate a new point
    interval: number;

    // The capitalsnapshot needs to be delayed to assure that it's after the generation of the new Stock Value
    depotSnapshotDelayInMs: number;

    // the amount of point that will be in the chart
    points: () => number;
}

export const Config: StockMarketConfiguration = {
    interval: 5,
    lastMinutes: 60,
    depotSnapshotDelayInMs: 3,
    points: () => Config.lastMinutes * 60 / Config.interval
};