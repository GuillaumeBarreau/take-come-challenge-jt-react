import { filterCards } from './filterCards.logic';

describe('Tag', () => {
    let cards;

    beforeEach(() => {
        cards = [
            {
                _id: '001',
                name: 'Mediot',
                tags: ['item1', 'item2'],
            },
            {
                _id: '002',
                name: 'Kario',
                tags: ['item2', 'item4'],
            },
            {
                _id: '003',
                name: 'Kario',
                tags: ['item1', 'item3'],
            },
        ]
    });

    it('should return two object into array', () => {
        const filter = filterCards(cards, 'Kario');
        expect(filter.length).toEqual(2);
    });

    it('should return a array empty', () => {
        const filter = filterCards(cards, 'Teemo');
        expect(filter.length).toEqual(0);
    });

    it('should return two object into array', () => {
        const filter = filterCards(cards, 'item1');
        expect(filter.length).toEqual(2);
    });

    it('should return a array empty', () => {
        const filter = filterCards(cards, 'item5');
        expect(filter.length).toEqual(0);
    });
});
