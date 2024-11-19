import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";  // Import 'toast' along with 'ToastContainer'
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
    setCart(prevCart => prevCart.filter((item) => !selectedItems[item.uniqueId]));
    
    setSelectedItems({});
    
    const updatedCart = cart.filter((item) => !selectedItems[item.uniqueId]);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);

    checkedOutItems.forEach((item) => {
      toast.success(`${item.name} checked out successfully`);
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
