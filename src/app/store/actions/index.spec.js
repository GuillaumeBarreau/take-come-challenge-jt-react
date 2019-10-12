import { sortCards } from './index';

describe('actions', () => {
    it('should create an action to sorting cards', () => {
        const filter = '';
        const expectedAction = {
            type: 'SORT_CARDS',
            filter,
        };
        expect(sortCards(filter)).toEqual(expectedAction);
    });
});
