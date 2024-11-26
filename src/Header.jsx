import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './assets/logo.png';

function Header() {
  return (
    <header>
       <div className="logo-container">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
          <li>
            <Link to="/support" className="nav-link">Customer Support</Link>
          </li>

          <li>
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;