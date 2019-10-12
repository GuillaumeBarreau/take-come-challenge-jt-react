import React from "react";
import PropTypes from "prop-types";
import "./typography.css";

export const Typography = ({ children }) => {
    return (
        <p className="typography typography__text">
            <strong>{children}</strong>
        </p>
    );
};

Typography.defaultProps = {
    children: "",
};

Typography.propTypes = {
    children: PropTypes.string,
};
