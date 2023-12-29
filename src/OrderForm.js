// OrderForm.js
import React, { useState } from 'react';

const OrderForm = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    // Add logic to submit the form data 
    console.log('Form submitted:', { orderNumber, totalAmount });
  };

  return (
    <div>
      <h2>Create New Order</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Order Number:
          <input
            type="text"
            value={orderNumber}
            onChange={e => setOrderNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Total Amount:
          <input
            type="number"
            value={totalAmount}
            onChange={e => setTotalAmount(e.target.value)}
          />
        </label>
        <br />
        {/* Add more input fields for additional order details */}
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
