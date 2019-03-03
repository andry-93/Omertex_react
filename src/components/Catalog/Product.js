import React, { PureComponent } from 'react';

export default class Product extends PureComponent {
  render() {
    const { props } = this;
    const { catalog, isOpen, onProductClick } = props;
    const description = isOpen && (
      <div>
        <div className="availability">
          Наличие:
          &nbsp;
          {catalog.availability ? 'В наличии' : 'Под заказ'}
        </div>
        <p className="description">{catalog.description}</p>
      </div>
    );
    return (
      <div role="grid" tabIndex={0} className="post-module" onClick={onProductClick} onKeyDown={onProductClick}>
        <div className="thumbnail">
          <img alt="" src={catalog.img} />
        </div>
        <div className="post-content">
          <h2 className="title">{catalog.title}</h2>
          <h3 className="price">
            {catalog.price}
            $
          </h3>
          {description}
        </div>
      </div>
    );
  }
}
