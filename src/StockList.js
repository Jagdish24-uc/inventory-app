// StockList.js
import React from 'react';

const StockList = () => {
  const stockItems = [
    { productId: 1, productName: 'Product 1', currentStock: 50 },
    { productId: 2, productName: 'Product 2', currentStock: 30 },
    // ... add more stock items
  ];

  return (
    <div className="container mt-5">
      <h2>Stock List</h2>
      <ul className="list-group">
        {stockItems.map(stockItem => (
          <li key={stockItem.productId} className="list-group-item">
            {stockItem.productName} - Current Stock: {stockItem.currentStock}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
