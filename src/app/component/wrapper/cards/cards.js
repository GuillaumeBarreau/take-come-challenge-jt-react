import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Card } from "../../card/card";

export const WrapperCards = ( ) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/data/results.json")
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(console.error.bind(console));
    }, []);

    return (
        <ul className="wrapper-cards wrapper-cards__list">
            {
                cards.map((card,i) =>
                    <Card
                        key={card._id}
                        name={card.name}
                        tags={card.tags}
                    />
                )
            }
        </ul>
    );
};

WrapperCards.defaultProps = {
    cards: [],
};

WrapperCards.propTypes = {
    cards: PropTypes.array,
};
