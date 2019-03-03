import React from 'react';

import catalog from '../../dateJSON';
import Product from './Product';
import './style.css';

export default function Catalog() {
  const catalogElements = catalog.map(product => (
    <div key={product.id} className="column">
      <Product catalog={product} />
    </div>
  ));
  return (
    <section className="full-section">
      <h1>Каталог</h1>
      <div className="container">
        {catalogElements}
      </div>
    </section>
  );
}
