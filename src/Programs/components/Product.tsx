import React, { Component } from 'react';

interface ProductProps {
  name: string;
  price: number;
}

class Product extends Component<ProductProps> {
  static defaultProps = {
    name: 'Unknown Product',
    price: 0,
  };

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Price: ${this.props.price}</p>
      </div>
    );
  }
}

export default Product;