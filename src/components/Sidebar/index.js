import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logotype from '../../img/logo_omertex.png';

import Nav from './Nav';
import './style.css';

function Sidebar(props) {
  const { toggleMenu } = props;
  return (
    <div>
      <button type="button" className="close" onClick={toggleMenu}>
        <i className="fas fa-times-circle" />
      </button>
      <Link to="/" className="logo-sidebar">
        <img src={Logotype} alt="Omertex" />
      </Link>
      <Nav />
    </div>
  );
}

Sidebar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Sidebar;
