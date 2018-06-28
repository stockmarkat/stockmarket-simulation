import { StockType } from '../state/AppState';

export const getCorrectIconForType = (type: StockType) => {
    const iconPrefix = 'pe-7s-';

    switch (type) {
        case StockType.FireArms:
            return iconPrefix + 'arc';
        case StockType.Energy:
            return iconPrefix + 'plug';
        case StockType.Finance:
            return iconPrefix + 'cash';
        case StockType.RawMaterials:
            return iconPrefix + 'tools';
        case StockType.Technology:
            return iconPrefix + 'rocket';
    }

    return 'Not a valid icon!';
};