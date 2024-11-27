// App.js
import React, { useEffect } from 'react'; // Import useEffect
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Products from './Products';
import Cart from './Cart'; // Import Cart component
import ProductDetails from './ProductDetails';
import logo from '@/assets/logo.png';
import Contact from './Contact';
import CustomerSupport from './CustomerSupport';
import Orders from './Orders';
import Testimonies from './Testimonies';

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
  
  // Add these handler functions
  const handleClearOrders = () => {
    localStorage.removeItem('orders');
    localStorage.removeItem('orderIntervals');
    return <Navigate to="/orders" replace />;
  };

  // Add these handler functions
  const handleClearTestimonials = () => {
    localStorage.setItem('testimonials', JSON.stringify([])); 
    return <Navigate to="/products" replace />;
};


  const handleClearRatings = () => {
    localStorage.removeItem('productReviews');
    return <Navigate to="/products" replace />;
  };


  const handleClearAll = () => {
    localStorage.removeItem('orders');
    localStorage.removeItem('orderIntervals');
    localStorage.removeItem('productReviews');
    return <Navigate to="/" replace />;
  };

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
        <Route path="/orders" element={<Orders />} />
        <Route path="/clearOrders" element={handleClearOrders()} />
        <Route path="/clearRatings" element={handleClearRatings()} />
        <Route path="/clearTestimonies" element={handleClearTestimonials()} />
        <Route path="/clearAll" element={handleClearAll()} />
        <Route path="/testimonies" element={<Testimonies />} />
      </Routes>
    </Router>
  );
}

export default App;
