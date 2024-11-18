// App.js
import React, { useEffect } from 'react'; // Import useEffect
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Products from './Products';
import Cart from './Cart'; // Import Cart component
import ProductDetails from './ProductDetails';

function App() {

  useEffect(() => {
    document.title = "Viora Cosmetics";
  }, []); 
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
      </Routes>
    </Router>
  );
}

export default App;
