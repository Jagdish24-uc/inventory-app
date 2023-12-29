// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ProductForm from './ProductForm';
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';
import OrderForm from './OrderForm';
import StockList from './StockList';
import StockAdjustmentForm from './StockAdjustmentForm';
import Login from './Login';
import Signup from './Signup';
import UserProfile from './UserProfile';
import Header from './Header';  // Import the new Common Components
import Footer from './Footer';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Sidebar />
        {/* Your navigation, header, or sidebar components can go here */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/order/:id" element={<OrderDetail />} />
          <Route path="/create-order" element={<OrderForm />} />
          <Route path="/stock" element={<StockList />} />
          <Route path="/adjust-stock" element={<StockAdjustmentForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
