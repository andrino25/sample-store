// App.js
import React, { useEffect } from 'react'; // Import useEffect
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Products from './Products';
import Cart from './Cart'; // Import Cart component
import ProductDetails from './ProductDetails';
import logo from '@/assets/logo.png';
import Contact from './Contact';
import CustomerSupport from './CustomerSupport';

function App() {

  useEffect(() => {
    document.title = "Viora Cosmetics";
    
    // Create a new link element
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.type = 'image/png';  // Specify PNG type
    newFavicon.href = logo;

    // Remove existing favicon
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      existingFavicon.remove();
    }

    // Add new favicon to head
    document.head.appendChild(newFavicon);
  }, []); 
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<CustomerSupport />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
      </Routes>
    </Router>
  );
}

export default App;
