// OrderDetail.js
import React from 'react';

const OrderDetail = ({ match }) => {
  // Placeholder data for demonstration purposes
  const orderId = match.params.id;
  const order = { id: orderId, orderNumber: '123', totalAmount: 100 }; // Replace with actual data

  return (
    <div>
      <h2>Order Detail</h2>
      <p>Order Number: {order.orderNumber}</p>
      <p>Total Amount: ${order.totalAmount}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default OrderDetail;
