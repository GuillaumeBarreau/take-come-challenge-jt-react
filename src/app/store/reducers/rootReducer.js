import resultsData from '../data/results.json';
import { filterCards } from '../../scripts/filterCards.logic';

const initialState = resultsData;

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SORT_CARDS':
        return {
            cards: filterCards(initialState, action.filter),
        };
    default:
        return {
            cards: state,
        };
    }
};
