// StockAdjustmentForm.js
import React, { useState } from 'react';

const StockAdjustmentForm = () => {
  const [productId, setProductId] = useState('');
  const [adjustmentAmount, setAdjustmentAmount] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    
    console.log('Form submitted:', { productId, adjustmentAmount });
  };

  return (
    <div>
      <h2>Adjust Stock Levels</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Product ID:
          <input
            type="text"
            value={productId}
            onChange={e => setProductId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Adjustment Amount:
          <input
            type="number"
            value={adjustmentAmount}
            onChange={e => setAdjustmentAmount(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Adjust Stock</button>
      </form>
    </div>
  );
};

export default StockAdjustmentForm;
