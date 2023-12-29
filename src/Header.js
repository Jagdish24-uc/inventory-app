// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <h1>INVENTORY APP</h1>
        <nav>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="/dashboard" className="text-white">Dashboard</Link></li>
            <li className="list-inline-item"><Link to="/products" className="text-white">Products</Link></li>
            <li className="list-inline-item"><Link to="/orders" className="text-white">Orders</Link></li>
            <li className="list-inline-item"><Link to="/stock" className="text-white">Stock</Link></li>
            <li className="list-inline-item"><Link to="/user-profile" className="text-white">User Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
