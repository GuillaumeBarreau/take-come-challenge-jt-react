import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import "./cards.css";

import { Card } from "../../card/card";

const WrapperCards = ( { cards } ) => {
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

const mapStateToProps = state => {
    return {
        cards: state,
    };
};

WrapperCards.defaultProps = {
    cards: [],
};

WrapperCards.propTypes = {
    cards: PropTypes.array,
};

export default connect(mapStateToProps)(WrapperCards);
