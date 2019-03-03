import React, { PureComponent } from 'react';

import catalog from '../../dateJSON';
import Product from './Product';
import './style.css';

export default class Catalog extends PureComponent {
  state = {
    openProductId: null,
    filterValue: '',
  }

  handleClick = (openProductIdTemp) => {
    const { openProductId } = this.state;
    this.setState({
      openProductId: openProductId === openProductIdTemp ? null : openProductIdTemp,
    });
  };

  updateFilterValue = (evt) => {
    this.setState({
      filterValue: evt.target.value,
    });
  };

  render() {
    const { state } = this;
    const catalogElements = catalog
      .filter(array => (
        array.title
          .toLowerCase()
          .trim()
          .indexOf(
            state.filterValue
              .toLowerCase()
              .trim(),
          ) > -1
      ))
      .map(product => (
        <div key={product.id} className="column">
          <Product
            catalog={product}
            isOpen={state.openProductId === product.id}
            onProductClick={this.handleClick.bind(this, product.id)}
          />
        </div>
      ));
    return (
      <section className="full-section">
        <h1>Каталог</h1>
        <ol>
          <li>Данные для каталога, берутся из JSON файла;</li>
          <li>Для просмотра наличия товара и краткой информации, кликните на него;</li>
          <li>Для фильтрации товаров, введите название продукта в поле для ввода.</li>
        </ol>
        <input type="text" value={state.filterValue} onChange={evt => this.updateFilterValue(evt)} placeholder="Введите наименование продукта..." id="filter-value" />
        <div className="container">
          {catalogElements}
        </div>
      </section>
    );
  }
}
