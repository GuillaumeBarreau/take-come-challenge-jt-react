export const filterCards = (cards, filter) => {

    const nameMatch = cards.filter(
        card => card.name.toLowerCase().includes(filter.toLowerCase())
    );

    const tagsMatch = cards.filter(
        card => card.tags.find(tag => tag.includes(filter.toLowerCase()))
    );

    return [...new Set([...tagsMatch, ...nameMatch])];
}
