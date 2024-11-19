import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";  // Import 'toast' along with 'ToastContainer'
import Swal from 'sweetalert2';
import "react-toastify/dist/ReactToastify.css";  // Import CSS for Toastify

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalPrice);
  };

  const handleRemove = (uniqueId) => {
    const itemToRemove = cart.find((item) => item.uniqueId === uniqueId);
    setCart(prevCart => prevCart.filter((item) => item.uniqueId !== uniqueId));
    
    const updatedCart = cart.filter((item) => item.uniqueId !== uniqueId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);

    if (itemToRemove) {
      toast.success(`${itemToRemove.name} removed from cart`);
    }
  };

  const handleUpdateQuantity = (uniqueId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.uniqueId === uniqueId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    setTotal(0);
    
    toast.success("Cart has been cleared", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };
  

  const handleSelectItem = (uniqueId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [uniqueId]: !prev[uniqueId],
    }));
  };

  const handleCheckout = () => {
    const checkedOutItems = cart.filter((item) => selectedItems[item.uniqueId]);
    
    if (checkedOutItems.length === 0) {
      toast.error("Please select items to checkout");
      return;
    }

    const totalAmount = checkedOutItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Define the payment change handler function globally
    window.handlePaymentChange = function(radio) {
      // Hide all payment details first
      document.getElementById('cardDetails').classList.add('hidden');
      document.getElementById('gcashDetails').classList.add('hidden');
      
      // Show selected payment details
      if (radio.value === 'card') {
        document.getElementById('cardDetails').classList.remove('hidden');
      } else if (radio.value === 'gcash') {
        document.getElementById('gcashDetails').classList.remove('hidden');
      }

      // Add selected state to the parent label
      document.querySelectorAll('.payment-option').forEach(label => {
        label.classList.remove('border-pink-500');
      });
      radio.closest('.payment-option').classList.add('border-pink-500');
    };

    Swal.fire({
      title: '<h3 class="text-xl font-bold text-gray-800 mb-4">Checkout Details</h3>',
      html: `
        <form id="checkoutForm" class="text-left">
          <!-- Personal Information -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-700 mb-3">Personal Information</h4>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500" required>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700">Contact Number</label>
                <input type="tel" id="phone" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500" required>
              </div>
            </div>
          </div>

          <!-- Delivery Information -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-700 mb-3">Delivery Information</h4>
            <div class="space-y-3">
              <div>
                <label class="block text-sm font-medium text-gray-700">Delivery Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                  required
                >
          </div>

          <!-- Payment Method -->
          <div class="mb-6">
            <h4 class="font-semibold text-gray-700 mb-3">Payment Method</h4>
            <div class="space-y-3">
              <label class="payment-option block p-3 border border-gray-200 rounded-lg hover:border-pink-500 cursor-pointer">
                <input type="radio" name="payment" value="card" class="hidden" onchange="handlePaymentChange(this)">
                <div class="flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" class="w-8 h-8 mr-3">
                  <div>
                    <div class="font-medium">Credit/Debit Card</div>
                    <div class="text-sm text-gray-500">Pay with Visa, Mastercard</div>
                  </div>
                </div>
                <div id="cardDetails" class="hidden mt-3 space-y-2">
                  <input type="text" placeholder="Card Number" class="w-full px-3 py-2 border rounded">
                  <div class="flex space-x-2">
                    <input type="text" placeholder="MM/YY" class="w-1/2 px-3 py-2 border rounded">
                    <input type="text" placeholder="CVV" class="w-1/2 px-3 py-2 border rounded">
                  </div>
                </div>
              </label>

              <label class="payment-option block p-3 border border-gray-200 rounded-lg hover:border-pink-500 cursor-pointer">
                <input type="radio" name="payment" value="gcash" class="hidden" onchange="handlePaymentChange(this)">
                <div class="flex items-center">
                  <img src="https://images.seeklogo.com/logo-png/52/1/gcash-logo-png_seeklogo-522261.png" class="w-8 h-8 mr-3">
                  <div>
                    <div class="font-medium">GCash</div>
                    <div class="text-sm text-gray-500">Pay with GCash E-wallet</div>
                  </div>
                </div>
                <div id="gcashDetails" class="hidden mt-3">
                  <input type="text" placeholder="GCash Number" class="w-full px-3 py-2 border rounded">
                </div>
              </label>

              <label class="payment-option block p-3 border border-gray-200 rounded-lg hover:border-pink-500 cursor-pointer">
                <input type="radio" name="payment" value="cod" class="hidden" onchange="handlePaymentChange(this)">
                <div class="flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2331/2331941.png" class="w-8 h-8 mr-3">
                  <div>
                    <div class="font-medium">Cash on Delivery</div>
                    <div class="text-sm text-gray-500">Pay when you receive</div>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-700 mb-3">Order Summary</h4>
            <div class="space-y-3">
              ${checkedOutItems.map(item => `
                <div class="flex items-center gap-3 p-2 bg-white rounded">
                  <img src="${item.src}" class="w-16 h-16 object-cover rounded">
                  <div class="flex-1">
                    <h5 class="font-medium">${item.name}</h5>
                    <div class="text-sm text-gray-500">Qty: ${item.quantity}</div>
                    <div class="text-sm font-medium">₱${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>
              `).join('')}
              <div class="border-t pt-3 mt-3">
                <div class="flex justify-between font-medium">
                  <span>Subtotal:</span>
                  <span>₱${totalAmount.toFixed(2)}</span>
                </div>
                <div class="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Shipping Fee:</span>
                  <span>₱50.00</span>
                </div>
                <div class="flex justify-between font-bold text-lg mt-2">
                  <span>Total:</span>
                  <span>₱${(totalAmount + 50).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </form>

        <!-- Load Google Maps JavaScript API -->
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places&callback=initMap" async defer></script>
      `,
      confirmButtonText: 'Place Order',
      confirmButtonColor: '#EC4899',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      width: '40rem',
      customClass: {
        container: 'font-sans'
      },
      preConfirm: () => {
        const form = document.getElementById('checkoutForm');
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const payment = document.querySelector('input[name="payment"]:checked')?.value;

        if (!name || !phone || !address || !payment) {
          Swal.showValidationMessage('Please fill in all required fields');
          return false;
        }

        // Additional validation for payment methods
        if (payment === 'card') {
          const cardNumber = form.querySelector('#cardDetails input[placeholder="Card Number"]').value;
          const expiry = form.querySelector('#cardDetails input[placeholder="MM/YY"]').value;
          const cvv = form.querySelector('#cardDetails input[placeholder="CVV"]').value;
          
          if (!cardNumber || !expiry || !cvv) {
            Swal.showValidationMessage('Please fill in all card details');
            return false;
          }
        } else if (payment === 'gcash') {
          const gcashNumber = form.querySelector('#gcashDetails input').value;
          
          if (!gcashNumber) {
            Swal.showValidationMessage('Please enter GCash number');
            return false;
          }
        }

        return { 
          name, 
          phone, 
          address,
          payment,
        };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove checked out items from cart
        setCart(prevCart => prevCart.filter((item) => !selectedItems[item.uniqueId]));
        setSelectedItems({});
        
        const updatedCart = cart.filter((item) => !selectedItems[item.uniqueId]);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        calculateTotal(updatedCart);

        // Show success message
        Swal.fire({
          icon: 'success',
          title: 'Order Placed Successfully!',
          text: `Thank you for your purchase, ${result.value.name}!`,
          confirmButtonText: 'OK'
        });
      }
    });
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex h-full flex-col">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
          <div className="mt-6">
            <ul role="list" className="space-y-6">
              {cart.length > 0 ? (
                cart.map((product) => (
                  <li key={product.uniqueId} className="flex items-center py-4 bg-gray-50 rounded-lg shadow-sm">
                    <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between text-lg font-medium text-gray-900">
                        <h3>{product.name}</h3>
                        <p>₱{(product.price * product.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="text-sm text-gray-500">Qty:</span>
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(e) =>
                            handleUpdateQuantity(product.uniqueId, Number(e.target.value))
                          }
                          min="1"
                          className="w-16 p-1 border rounded text-center"
                        />
                      </div>
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          checked={selectedItems[product.uniqueId] || false}
                          onChange={() => handleSelectItem(product.uniqueId)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-500">Select for checkout</span>
                      </div>
                      <button
                        onClick={() => handleRemove(product.uniqueId)}
                        className="mt-2 text-sm text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <p>Total</p>
            <p>₱{total.toFixed(2)}</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleClearCart}
              className="flex-1 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="flex-1 rounded-md bg-pink-500 px-4 py-2 text-white hover:bg-pink-700 text-center"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Place ToastContainer here so that it renders the toast */}
      <ToastContainer />
    </div>
  );
}
