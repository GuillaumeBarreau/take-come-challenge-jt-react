import React from "react";
import PropTypes from "prop-types";
import "./tag.css";

export const Tag = ({ children }) => {
    return (
        <li className="tag tag__text">
            {children}
        </li>
    );
};

Tag.defaultProps = {
    children: "",
};

Tag.propTypes = {
    children: PropTypes.string,
};
