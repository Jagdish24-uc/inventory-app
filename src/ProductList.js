// ProductList.js
import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 30 },
    // ... add more products
  ];

  return (
    <div className="container mt-5">
      <h2>Product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
