// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="sidebar" className={`bg-light ${isSidebarOpen ? 'active' : ''}`}>
      <button id="sidebarToggle" className="btn btn-dark" onClick={toggleSidebar}>
      Sidebar
      </button>
      {/* Hidden by default */}
      <div id="sidebarContent" className={isSidebarOpen ? '' : 'd-none'}>
        <h2>Sidebar</h2>
        <nav>
          <ul className="list-unstyled">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/stock">Stock</Link></li>
            <li><Link to="/user-profile">User Profile</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
