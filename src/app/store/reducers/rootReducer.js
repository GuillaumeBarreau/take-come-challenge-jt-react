import resultsData from '../data/results.json';
import { filterCards } from "./rootReducer.logic"

const initialState = resultsData;

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SORT_CARDS':
        return filterCards(initialState, action.filter);
    default:
        return state;
    }
};



