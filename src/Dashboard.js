// Dashboard.js
import React from 'react';
import './Dashboard.css';
const Dashboard = () => {
  const metrics = {
    totalProducts: 50,
    totalOrders: 30,
    totalCustomers: 20,
  };

  const recentActivities = [
    'Product added: Product 1',
    'Order placed: Order #123',
    'Customer added: John Doe',
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Inventory Management Dashboard</h1>
        <p className="dashboard-subtitle">
          Manage orders. Track inventory. Handle GST billing. Oversee warehouses.
          One inventory management software to run all your inventory operations.
        </p>
      </div>

      <div className="dashboard-content">
        <div className="card metrics-card">
          <div className="card-body">
            <h3 className="card-title">Key Metrics</h3>
            <p className="card-text">Total Products: {metrics.totalProducts}</p>
            <p className="card-text">Total Orders: {metrics.totalOrders}</p>
            <p className="card-text">Total Customers: {metrics.totalCustomers}</p>
          </div>
        </div>

        <div className="card recent-activities-card">
          <div className="card-body">
            <h3 className="card-title">Recent Activities</h3>
            <ul className="list-group">
              {recentActivities.map((activity, index) => (
                <li key={index} className="list-group-item">{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
