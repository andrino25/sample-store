import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);

    const intervalId = setInterval(() => {
      const currentOrders = JSON.parse(localStorage.getItem('orders')) || [];
      setOrders(currentOrders);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getOrdersByStatus = (status) => {
    return orders.filter(order => order.status === status);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };


  const handleConfirmReceipt = (order) => {
    Swal.fire({
      title: '<h3 class="text-2xl font-bold text-gray-800 mb-4">Rate & Review Your Purchase</h3>',
      html: `
        <div class="space-y-6">
          ${order.items.map((item, index) => `
            <div class="border-b pb-6">
              <div class="flex items-start space-x-4 mb-4">
                <img 
                  src="${item.src}" 
                  alt="${item.name}" 
                  class="w-24 h-24 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <h4 class="font-semibold text-lg text-gray-800">${item.name}</h4>
                  <p class="text-sm text-gray-500">Shade: ${item.name.split('-')[1].trim()}</p>
                </div>
              </div>
              
              <div class="flex flex-col items-center space-y-3">
                <p class="text-sm text-gray-600">How would you rate this product?</p>
                <div class="rating-container-${index} flex justify-center space-x-2">
                  ${[1,2,3,4,5].map(num => `
                    <button 
                      class="rating-star-${index} text-3xl transition-all duration-200 transform hover:scale-110" 
                      data-rating="${num}" 
                      data-index="${index}"
                    >
                      ★
                    </button>
                  `).join('')}
                </div>
                <textarea 
                  class="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                  placeholder="Share your thoughts about this product..."
                  id="review-${index}"
                  rows="3"
                ></textarea>
              </div>
            </div>
          `).join('')}
        </div>
      `,
      didOpen: () => {
        const style = document.createElement('style');
        style.textContent = `
          [class^="rating-star-"] {
            color: #cbd5e0;
            transition: all 0.2s;
            cursor: pointer;
          }
          [class^="rating-star-"].active {
            color: #f59e0b;
            transform: scale(1.2);
          }
          .rating-container-:hover [class^="rating-star-"] {
            color: #f59e0b;
          }
        `;
        document.head.appendChild(style);

        // Initialize star rating functionality for each product
        order.items.forEach((_, index) => {
          document.querySelectorAll(`.rating-star-${index}`).forEach(star => {
            star.addEventListener('click', (e) => {
              const rating = e.target.dataset.rating;
              const itemIndex = e.target.dataset.index;
              const stars = document.querySelectorAll(`.rating-star-${itemIndex}`);
              
              stars.forEach(s => {
                s.classList.remove('active');
                if (s.dataset.rating <= rating) {
                  s.classList.add('active');
                }
              });
            });
          });
        });
      },
      width: '600px',
      confirmButtonText: 'Submit Review',
      confirmButtonColor: '#EC4899',
      showCancelButton: true,
      cancelButtonText: 'Later',
      customClass: {
        container: 'font-sans',
        popup: 'rounded-lg',
      },
      preConfirm: () => {
        const reviews = [];
        order.items.forEach((item, index) => {
          const stars = document.querySelectorAll(`.rating-star-${index}.active`);
          const review = document.querySelector(`#review-${index}`).value;
          
          reviews.push({
            productId: item.id,
            productName: item.name,
            rating: stars.length,
            review: review,
            customerName: order.customerInfo.name,
            date: new Date().toLocaleDateString()
          });
        });
        return reviews; // Return the array of reviews
      }
    }).then((result) => {
      if (result.isConfirmed && Array.isArray(result.value)) {
        // Save reviews with product-type and shade-specific organization
        const existingReviews = JSON.parse(localStorage.getItem('productReviews') || '{}');
        
        result.value.forEach(review => {
          const productType = review.productName.split('-')[0].trim();
          const shade = review.productName.split('-')[1].trim();
          const reviewKey = `${productType}-${shade}`;
          
          if (!existingReviews[reviewKey]) {
            existingReviews[reviewKey] = [];
          }
          existingReviews[reviewKey].push(review);
        });
        
        localStorage.setItem('productReviews', JSON.stringify(existingReviews));

        // Update order status
        const updatedOrders = orders.map(o => {
          if (o.id === order.id) {
            return { ...o, status: 'Received' };
          }
          return o;
        });
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        setOrders(updatedOrders);

        Swal.fire({
          icon: 'success',
          title: 'Thank you for your review!',
          text: 'Your feedback helps us improve our products and services.'
        });
      }
    });
  };

  // Add progress bar component
  const ProgressBar = ({ status }) => {
    const steps = ['To Pay', 'To Ship', 'To Receive', 'Received'];
    const currentStep = steps.indexOf(status);

    return (
      <div className="w-full mt-4">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div 
              key={step}
              className={`flex flex-col items-center w-1/4 ${
                index <= currentStep ? 'text-pink-600' : 'text-gray-400'
              }`}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${index <= currentStep ? 'bg-pink-600 text-white' : 'bg-gray-200'}
              `}>
                {index + 1}
              </div>
              <span className="text-xs mt-1">{step}</span>
            </div>
          ))}
        </div>
        <div className="relative pt-4">
          <div className="absolute top-0 h-1 w-full bg-gray-200 rounded">
            <div 
              className="absolute h-full bg-pink-600 rounded transition-all duration-500"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
        <div className="flex gap-4 items-center">
          <Link 
            to="/products" 
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
      
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex space-x-1 rounded-xl bg-pink-100 p-1">
          {['To Ship', 'To Receive', 'Received'].map((status) => (
            <Tab
              key={status}
              className={({ selected }) =>
                `w-full rounded-lg py-3 text-sm font-medium leading-5
                 ${selected
                  ? 'bg-pink-500 text-white shadow'
                  : 'text-gray-700 hover:bg-pink-200'
                } transition-all duration-200`
              }
            >
              {status} ({getOrdersByStatus(status).length})
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-4">
          {['To Ship', 'To Receive', 'Received'].map((status) => (
            <Tab.Panel
              key={status}
              className="space-y-4"
            >
              {getOrdersByStatus(status).length === 0 ? (
                <div className="text-center py-8 bg-white rounded-lg shadow">
                  <p className="text-gray-500">No orders in {status}</p>
                </div>
              ) : (
                getOrdersByStatus(status).map((order) => (
                  <div key={order.id} className="bg-white rounded-lg shadow-md p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          Order #{order.id}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Placed on {formatDate(order.timestamp)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                          {status}
                        </span>
                        {status === 'To Pay' && (
                          <button className="mt-2 text-sm text-pink-500 hover:text-pink-700">
                            Pay Now
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium text-gray-700 mb-2">Order Items:</h4>
                      <div className="space-y-3">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <img
                              src={item.src}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h5 className="font-medium text-gray-800">{item.name}</h5>
                              <p className="text-sm text-gray-500">
                                Quantity: {item.quantity} × ₱{item.price}
                              </p>
                            </div>
                            <p className="font-medium text-gray-800">
                              ₱{(item.quantity * item.price).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-medium">
                          ₱{order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-600">Shipping Fee:</span>
                        <span className="font-medium">₱50.00</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold mt-2">
                        <span>Total:</span>
                        <span className="text-pink-600">
                          ₱{(order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 50).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {status === 'To Receive' && (
                      <div className="border-t pt-4">
                        <button 
                          onClick={() => handleConfirmReceipt(order)}
                          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors"
                        >
                          Confirm Receipt
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Orders;