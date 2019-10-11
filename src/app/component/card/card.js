import React from "react";
import PropTypes from "prop-types";
import "./card.css";

import { Typography } from "../typography/typography";

export const Card = ({ title, tags  }) => {
    return (
        <li className="card card__text">
            <Typography>{title}</Typography>
        </li>
    );
};

Card.defaultProps = {
    title: "Title",
    tags: ['aze', 'aze', 'aze', 'aze']
};

Card.propTypes = {
    title: PropTypes.string,
    tags: PropTypes.array,
};
