import './layout.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
    return (
        <>
            <main className="main">{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
