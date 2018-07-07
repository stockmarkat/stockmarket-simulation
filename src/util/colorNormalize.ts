import { StockType } from '../state/AppState';

// gets the color of a category
export const getColor = (type: StockType): string => {
    switch (type) {
        case 'FireArms':
            return '#EE2D20';
        case 'Energy':
            return '#87CB16';
        case 'Finance':
            return '#943bea';
        case 'RawMaterials':
            return '#FF9500';
        case 'Technology':
            return '#3472F7';
        default:
            return 'notFound';
    }
};