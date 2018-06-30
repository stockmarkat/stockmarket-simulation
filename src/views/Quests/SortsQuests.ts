// This is a comparison function that will result in dates being sorted in DESCENDING order
import { Quest } from '../../state/AppState';

export const dateSortDescending = ( quest1: Quest, quest2: Quest ) => {
    if (quest1.completed! > quest2.completed!) {
        return -1;
    } else if (quest1.completed! < quest2.completed!) {
        return 1;
    } else {
        return 0;
    }
};