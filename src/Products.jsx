import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom'; 
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import prod1 from '@/assets/prod1.png';
import prod2 from '@/assets/prod3.png';
import prod3 from '@/assets/prod2.png';

import cus1 from '@/assets/cutsomer_one.jpg';
import cus2 from '@/assets/customer_two.jpg';
import cus3 from '@/assets/customer_three.jpg';

const predefinedTestimonials = [
  {
    image: cus1,
    name: 'Customer One',
    product: 'Matte Lip Tint',
    text: 'This matte lip tint is a game-changer! I have sensitive skin, and most lip products make my lips feel cracked, but this one is so smooth and comfortable. The color is vibrant, and it lasts for hours even through meals. Definitely worth every penny!',
    date: new Date().toISOString(),
    likes: 0,
    rating: 5
  },
  {
    image: cus2,
    name: 'Customer Two',
    product: 'Lip Tint',
    text: 'I’m obsessed with this lip tint! It’s such a natural, long-lasting color that looks great with everything. The formula is really lightweight and doesn’t feel cakey or sticky. It’s perfect for a no-makeup look or for layering under lipstick for added depth.',
    date: new Date().toISOString(),
    likes: 0,
    rating: 5
  },
  {
    image: cus3,
    name: 'Customer Three',
    product: 'Lip Gloss',
    text: 'I love how this gloss enhances the natural color of my lips without feeling like I’m wearing anything at all. It’s super lightweight and leaves a beautiful, glossy finish that’s not too over-the-top. I’ve been using it every day.',
    date: new Date().toISOString(),
    likes: 0,
    rating: 5
  },
];

// Cover page insertion
import coverPage from '@/assets/LipTint/coverpage.png';

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
    src: coverPage,
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
  const [testimonials, setTestimonials] = useState(predefinedTestimonials); // Initialize with predefined testimonials

  useEffect(() => {
    const loadTestimonies = () => {
      try {
        const storedTestimonials = localStorage.getItem('testimonialArr');
        if (storedTestimonials) {
          const parsedTestimonials = JSON.parse(storedTestimonials);
          setTestimonials(parsedTestimonials);
          console.log('Loaded testimonials:', parsedTestimonials);
        } else {
          console.log('No testimonials found in localStorage.');
          setTestimonials(predefinedTestimonials); // Default to predefined testimonials
        }
      } catch (error) {
        console.error('Error parsing testimonials from localStorage:', error);
        setTestimonials(predefinedTestimonials); // Handle corrupted data
      }
    };

    loadTestimonies();
  }, []);

  const handleLike = (index) => {
    const newTestimonials = testimonials.map((testimonial, i) => {
      if (i === index) {
        return { ...testimonial, likes: (testimonial.likes || 0) + 1 };
      }
      return testimonial;
    });
    setTestimonials(newTestimonials);
    localStorage.setItem('testimonialArr', JSON.stringify(newTestimonials));
  };

  const addToCart = (product) => {
    // Navigate to product details after adding to cart
    navigate(`/productDetails/${product.id}`);
  };

  const handleAddTestimonial = () => {
    Swal.fire({
      title: '<h3 class="text-2xl font-bold text-gray-800 mb-4">Share Your Experience</h3>',
      html: `
        <div class="space-y-4">
          <div class="relative">
            <label class="block text-sm font-medium text-gray-700 mb-1">Upload Your Photo</label>
            <input 
              type="file" 
              id="userImage" 
              accept="image/*"
              class="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border file:border-gray-300
                file:text-sm file:font-semibold
                file:bg-gray-50 file:text-pink-600
                hover:file:bg-gray-100"
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input 
              type="text" 
              id="userName"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
              required
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Product Used</label>
            <select 
              id="productUsed"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
              required
            >
              <option value="" disabled selected>Select a product</option>
              <option value="Matte Lip Tint">Matte Lip Tint</option>
              <option value="Lip Tint">Lip Tint</option>
              <option value="Lip Gloss">Lip Gloss</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Rating</label>
            <select 
              id="rating"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500"
              required
            >
              <option value="" disabled selected>Select rating</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Your Experience</label>
            <textarea 
              id="testimonialText"
              rows="4"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 resize-none"
              placeholder="Share your experience with our products..."
              required
            ></textarea>
          </div>
        </div>
      `,
      preConfirm: () => {
        const file = document.getElementById('userImage').files[0];
        const userName = document.getElementById('userName').value;
        const productUsed = document.getElementById('productUsed').value;
        const testimonialText = document.getElementById('testimonialText').value;
        const rating = document.getElementById('rating').value;

        if (!file || !userName || !productUsed || !testimonialText || !rating) {
          Swal.showValidationMessage('Please fill in all fields');
          return false;
        }

        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve({
              image: reader.result,
              name: userName,
              product: productUsed,
              text: testimonialText,
              rating: parseInt(rating),
              date: new Date().toISOString(),
              likes: 0
            });
          };
          reader.readAsDataURL(file);
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const newTestimonial = result.value;
        const updatedTestimonials = [...testimonials, newTestimonial];

        // Update both state and localStorage
        setTestimonials(updatedTestimonials);
        localStorage.setItem('testimonialArr', JSON.stringify(updatedTestimonials));

        console.log('Testimonial added:', newTestimonial);
      }
    });
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
  
      {/* Testimonials Section */}
      <div className="w-full px-4 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Customer Testimonials</h2>
            <button
              onClick={handleAddTestimonial}
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600"
            >
              Share Your Experience
            </button>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.product}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent click event from bubbling up
                      handleLike(index);
                    }}
                    className="flex items-center space-x-1 text-gray-500 hover:text-pink-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{testimonial.likes || 0}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;