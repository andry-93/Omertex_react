import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
      </ul>
    </nav>
  );
}
