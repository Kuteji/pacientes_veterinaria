import React from 'react';
import PropTypes from 'prop-types'; // para documentar

const Header = ({titulo}) => (
    <header className="text-center">
        <h1>{titulo}</h1>
    </header>
);
// documentando para saber que tipo de dato se espera
Header.propTypes = {
    titulo : PropTypes.string.isRequired
}


export default Header;