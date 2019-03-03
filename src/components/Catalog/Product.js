import React, { Component } from 'react';

export default class Product extends Component {
  state = {
    isOpen: false,
  }

  handleClick = (event) => {
    const { isOpen } = this.state;
    event.preventDefault();
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { props, state } = this;
    const { catalog } = props;
    const description = state.isOpen && (
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
      <div role="grid" tabIndex={0} className="post-module" onClick={this.handleClick} onKeyDown={this.handleClick}>
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
