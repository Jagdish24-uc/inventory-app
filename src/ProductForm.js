// ProductForm.js
import React, { useState } from 'react';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    // Add logic to submit the form data 
    console.log('Form submitted:', { productName, productPrice });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={productName}
            onChange={e => setProductName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={productPrice}
            onChange={e => setProductPrice(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
