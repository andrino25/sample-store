import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom'; 

import prod1 from '@/assets/prod1.png';
import prod2 from '@/assets/prod3.png';
import prod3 from '@/assets/prod2.png';

const products = [
  {
    id: 1,
    name: "Matte Lip Tint",
    price: 200,
    src: prod1,
    alt: "Matte Lip Tint Product Image"
  },
  {
    id: 3,
    name: "Lip Tint",
    price: 130,
    src: prod3,
    alt: "Lip Tint Product Image"
  },
  {
    id: 2,
    name: "Lip Gloss",
    price: 150,
    src: prod2,
    alt: "Lip Gloss Product Image"
  }
];

const Products = () => {
  const navigate = useNavigate();

  const addToCart = (product) => {
    // Navigate to product details after adding to cart
    navigate(`/productDetails/${product.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Stylish Header Section */}
      <div className="w-full bg-pink-500 text-white py-6 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Welcome to Our Product Showcase</h1>
        <p className="text-lg mb-8">Discover the perfect product for your needs.</p>
        <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
        <p className="text-md font-light">Choose your favorite product!</p>
      </div>
  
      {/* Product Display Section */}
      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="flex justify-center space-x-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white max-w-sm p-6 rounded-lg shadow-md">
              <Link to={`/productDetails/${product.id}`}>
                <div className="mb-4">
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="w-full h-64 object-cover rounded-md"
                    style={{ objectPosition: '40% -20%' }}
                  />
                </div>
              </Link>
              <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">₱{product.price}</p>
  
              <button
                onClick={() => addToCart(product)}
                className="mt-6 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600"
              >
                Add to Cart
              </button>
              <ToastContainer />
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default Products;
