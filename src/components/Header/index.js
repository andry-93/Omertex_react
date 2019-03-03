import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logotype from '../../img/logo_omertex.png';
import './style.css';

function Header(props) {
  const { toggleMenu } = props;
  return (
    <header>
      <button type="button" className="bars" onClick={toggleMenu}>
        <i className="fas fa-bars" />
      </button>
      <Link to="/" className="logo">
        <img src={Logotype} alt="Omertex" />
      </Link>
    </header>
  );
}

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Header;
