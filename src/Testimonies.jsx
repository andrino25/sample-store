import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

import cus1 from '@/assets/cutsomer_one.jpg';
import cus2 from '@/assets/customer_two.jpg';
import cus3 from '@/assets/customer_three.jpg';

const predefinedTestimonials = [
  {
    image: cus1, // Use the imported image directly
    name: 'Customer One',
    product: 'Matte Lip Tint',
    text: 'This matte lip tint is a game-changer! I have sensitive skin, and most lip products make my lips feel cracked, but this one is so smooth and comfortable. The color is vibrant, and it lasts for hours even through meals. Definitely worth every penny!',
    date: new Date().toISOString(),
    likes: 0,
  },
  {
    image: cus2, // Use the imported image directly
    name: 'Customer Two',
    product: 'Lip Tint',
    text: 'I’m obsessed with this lip tint! It’s such a natural, long-lasting color that looks great with everything. The formula is really lightweight and doesn’t feel cakey or sticky. It’s perfect for a no-makeup look or for layering under lipstick for added depth.',
    date: new Date().toISOString(),
    likes: 0,
  },
  {
    image: cus3, // Use the imported image directly
    name: 'Customer Three',
    product: 'Lip Gloss',
    text: 'I love how this gloss enhances the natural color of my lips without feeling like I’m wearing anything at all. It’s super lightweight and leaves a beautiful, glossy finish that’s not too over-the-top. I’ve been using it every day.',
    date: new Date().toISOString(),
    likes: 0,
  },
];

const Testimonies = () => {
  const [testimonials, setTestimonials] = useState(predefinedTestimonials);
  const [filter, setFilter] = useState('all');
  const [productFilter, setProductFilter] = useState('All'); // Set default filter to 'All'

  useEffect(() => {
    const storedTestimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
    setTestimonials(prev => [...prev, ...storedTestimonials]); // Append stored testimonials
  }, []);

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
      showCancelButton: true,
      confirmButtonText: 'Share Testimonial',
      confirmButtonColor: '#EC4899',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const file = document.getElementById('userImage').files[0];
        const userName = document.getElementById('userName').value;
        const productUsed = document.getElementById('productUsed').value;
        const testimonialText = document.getElementById('testimonialText').value;

        if (!file || !userName || !productUsed || !testimonialText) {
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
              date: new Date().toISOString(),
              likes: 0
            });
          };
          reader.readAsDataURL(file);
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const newTestimonials = [...testimonials, result.value];
        setTestimonials(newTestimonials);
        localStorage.setItem('testimonials', JSON.stringify(newTestimonials));
      }
    });
  };

  const handleLike = (index) => {
    const newTestimonials = testimonials.map((testimonial, i) => {
      if (i === index) {
        return { ...testimonial, likes: (testimonial.likes || 0) + 1 };
      }
      return testimonial;
    });
    setTestimonials(newTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(newTestimonials));
  };

  const handleTestimonialClick = (testimonial) => {
    Swal.fire({
      title: `<strong>${testimonial.name}</strong>`,
      html: `
        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-full h-48 object-cover mb-4 rounded-lg" />
        <p class="text-sm text-pink-600 mb-2">${testimonial.product}</p>
        <p class="text-gray-700">${testimonial.text}</p>
        <p class="text-sm text-gray-500 mt-4">${new Date(testimonial.date).toLocaleDateString()}</p>
      `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: 'Close',
      confirmButtonColor: '#EC4899',
    });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Customer Stories
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Real experiences from our valued customers
        </p>
        <button
          onClick={handleAddTestimonial}
          className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition duration-200"
        >
          Share Your Story
        </button>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-center space-x-4">
          {['All', 'Matte Lip Tint', 'Lip Tint', 'Lip Gloss'].map((product) => (
            <button
              key={product}
              onClick={() => setProductFilter(product)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                productFilter === product
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {product}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials
            .filter(
              (testimonial) =>
                productFilter === 'All' || testimonial.product === productFilter
            )
            .map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
                onClick={() => handleTestimonialClick(testimonial)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-pink-600 mb-3">
                    {testimonial.product}
                  </p>
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <div className="flex items-center justify-between">
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
                    <span className="text-sm text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
