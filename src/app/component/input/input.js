import React from "react";
import PropTypes from "prop-types";
import "./input.css";

export const Input = ({ value }) => {
    return (
        <div className="input__container">
            <img src="/icon/icon-search.svg" className="input__image" alt="Recherche" />
            <input
                className="input__text"
                type="text"
                defaultValue={value}
                placeholder="Que recherchez-vous ?"
                aria-label="Barre de rechercher"
            />
        </div>
    );
};

Input.defaultProps = {
    value: "",
};

Input.propTypes = {
    value: PropTypes.string,
};
