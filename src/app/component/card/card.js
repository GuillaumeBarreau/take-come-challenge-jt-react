import React from "react";
import PropTypes from "prop-types";
import "./card.css";

import { Typography } from "../typography/typography";
import { WrapperTags } from "../wrapper/tags/tags";

export const Card = ({ name, tags, tag  }) => {
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
    name: "name",
    tag: "tag",
    tags: ['default01', 'default02', 'default03', 'default04', 'default05']
};

Card.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    tags: PropTypes.array,
};
