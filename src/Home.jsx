import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import prod1 from '@/assets/prod1.png';
import prod2 from '@/assets/prod3.png';
import prod3 from '@/assets/prod2.png';
import aboutPicture from '@/assets/about_pic.png';

const Home = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/productDetails/${productId}`);
  };

  return (
    <div className="font-sans bg-white">
      {/* Hero Section with improved height and overlay */}
      <section className="relative h-screen bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        {/* Enhanced Video Background with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            className="w-full h-full object-cover object-center" 
            src={aboutPicture}
            alt="Hero Background"
          />
        </div>

        {/* Centered content with improved spacing */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-center">
            Welcome to Viora Cosmetics
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl text-center">
            Discover the best products for your perfect look.
          </p>
          <Link
            to="/products"
            className="bg-white text-pink-600 py-3 px-8 rounded-full text-xl font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section id="shop" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Products
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product Cards with improved styling */}
          <div 
            className="group bg-white rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => handleProductClick(1)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                src={prod1}
                alt="Matte Lip Tint"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Matte Lip Tint</h3>
              <p className="text-pink-600 text-xl font-bold">₱200</p>
            </div>
          </div>

          {/* Repeat the same structure for Product 2 and 3 */}
          <div 
            className="group bg-white rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => handleProductClick(3)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                src={prod3}
                alt="Lip Tint"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Lip Tint</h3>
              <p className="text-pink-600 text-xl font-bold">₱130</p>
            </div>
          </div>

          <div 
            className="group bg-white rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => handleProductClick(2)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                src={prod2}
                alt="Lip Gloss"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Lip Gloss</h3>
              <p className="text-pink-600 text-xl font-bold">₱150</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-8">
        <div className="text-center">
          <p className="text-lg">&copy; 2024 Makeup Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
