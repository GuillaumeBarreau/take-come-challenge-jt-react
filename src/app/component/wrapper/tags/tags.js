import React from "react";
import PropTypes from "prop-types";

import "./tags.css";
import { Tag } from "../../tag/tag";

export const WrapperTags = ({ tags }) => {
    return (
        <ul className="wrapper-tags wrapper-tags__list">
            {
                tags.map( (name) =>
                    <Tag key={name} >
                        {name}
                    </Tag>)
            }
        </ul>
    );
};

WrapperTags.defaultProps = {
    tags: [],
};

WrapperTags.propTypes = {
    tags: PropTypes.array,
};
