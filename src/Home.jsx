import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import prod1 from '@/assets/prod1.png';
import prod2 from '@/assets/prod3.png';
import prod3 from '@/assets/prod22.png';

const Home = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/productDetails/${productId}`);
  };

  return (
    <div className="font-sans bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 text-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content on top of the Video */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Welcome to Viora Cosmetics
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Discover the best products for your perfect look.
          </p>
          <Link
            to="/products"
            className="bg-white text-pink-600 py-2 px-6 rounded-lg text-xl hover:bg-pink-500 hover:text-white"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="shop" className="py-16 px-4 sm:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Products
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div 
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleProductClick(1)}
          >
            <img
              className="w-full h-48 object-cover"
              src={prod1}
              alt="Matte Lip Tint"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Matte Lip Tint</h3>
              <p className="text-gray-600">₱200</p>
            </div>
          </div>

          {/* Product 2 */}
          <div 
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleProductClick(3)}
          >
            <img
              className="w-full h-48 object-cover"
              src={prod3}
              alt="Lip Tint"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Lip Tint</h3>
              <p className="text-gray-600">₱130</p>
            </div>
          </div>

          {/* Product 3 */}
          <div 
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleProductClick(2)}
          >
            <img
              className="w-full h-48 object-cover"
              src={prod2}
              alt="Lip Gloss"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Lip Gloss</h3>
              <p className="text-gray-600">₱150</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-500 text-white py-6">
        <div className="text-center">
          <p>&copy; 2024 Makeup Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
