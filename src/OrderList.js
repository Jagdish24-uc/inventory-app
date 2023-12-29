// OrderList.js
import React from 'react';

const OrderList = () => {
  const orders = [
    { id: 1, orderNumber: '123', totalAmount: 100 },
    { id: 2, orderNumber: '124', totalAmount: 150 },
    // ... add more orders
  ];

  return (
    <div className="container mt-5">
      <h2>Order List</h2>
      <ul className="list-group">
        {orders.map(order => (
          <li key={order.id} className="list-group-item">
            Order #{order.orderNumber} - Total: ${order.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
