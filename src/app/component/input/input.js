import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sortCards } from "../../store/actions/index";
import "./input.css";

const Input = ({ dispatch }) => {
    return (
        <div className="input input__container">
            <img src="/icon/icon-search.svg" className="input__image" alt="Recherche" />
            <input
                className="input__text"
                onChange={e => {
                    dispatch(sortCards(e.target.value));
                }}
                type="text"
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

export default connect()(Input);
