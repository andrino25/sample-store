import React, { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalPrice);
  };

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    setTotal(0);
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
                  <li key={product.id} className="flex items-center py-4 bg-gray-50 rounded-lg shadow-sm">
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
                        <p>${(product.price * product.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="text-sm text-gray-500">Qty:</span>
                        <input
                          type="number"
                          value={product.quantity}
                          onChange={(e) =>
                            handleUpdateQuantity(product.id, Number(e.target.value))
                          }
                          min="1"
                          className="w-16 p-1 border rounded text-center"
                        />
                      </div>
                      <button
                        onClick={() => handleRemove(product.id)}
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
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleClearCart}
              className="flex-1 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Clear Cart
            </button>
            <a
              href="#"
              className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 text-center"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
