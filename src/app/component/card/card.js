import React from "react";
import PropTypes from "prop-types";
import "./card.css";

import { Typography } from "../typography/typography";
import { WrapperTags } from "../wrapper/tags/tags";

export const Card = ({ name, tags }) => {
    return (
        <li className="card card__text">
            <Typography>
                {name}
            </Typography>
            <WrapperTags tags={tags} />
        </li>
    );
};

Card.defaultProps = {
    name: "",
    tags: []
};

Card.propTypes = {
    name: PropTypes.string,
    tags: PropTypes.array,
};
