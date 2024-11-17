import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
    {
        id: 1,
        name: "Earthen Bottle",
        images: [
          { id: 1, color: "clay", name: "Earthen Bottle - Clay", price: 48, src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg", alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper." },
          { id: 2, color: "green", name: "Earthen Bottle - Green", price: 50, src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg", alt: "Olive drab green insulated bottle with flared screw lid and flat top." },
          {
            id: 3,
            color: "black",
            name: "Earthen Bottle - Black",
            price: 52,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
          },
          {
            id: 4,
            color: "blue",
            name: "Earthen Bottle - Blue",
            price: 49,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Blue earthenware bottle with cork stopper.",
          },
          {
            id: 5,
            color: "red",
            name: "Earthen Bottle - Red",
            price: 51,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Red ceramic bottle with a natural clay texture and a cork.",
          },
          {
            id: 6,
            color: "yellow",
            name: "Earthen Bottle - Yellow",
            price: 50,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Bright yellow ceramic bottle with a natural cork.",
          },
          {
            id: 7,
            color: "purple",
            name: "Earthen Bottle - Purple",
            price: 53,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Purple earthenware bottle with a matte finish and a cork stopper.",
          },
          {
            id: 8,
            color: "orange",
            name: "Earthen Bottle - Orange",
            price: 49,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Orange ceramic bottle with a cork stopper.",
          },
          {
            id: 9,
            color: "brown",
            name: "Earthen Bottle - Brown",
            price: 50,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Dark brown ceramic bottle with natural clay texture.",
          },
          {
            id: 10,
            color: "white",
            name: "Earthen Bottle - White",
            price: 55,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "White ceramic bottle with a smooth finish and cork stopper.",
          },
        ],
      },
      {
        id: 2,
        name: "Ceramic Mug",
        images: [
          { id: 1, color: "blue", name: "Ceramic Mug - Blue", price: 20, src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg", alt: "Blue ceramic mug with a handle." },
          { id: 2, color: "red", name: "Ceramic Mug - Red", price: 22, src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg", alt: "Red ceramic mug with a handle." },
          {
            id: 3,
            color: "black",
            name: "Earthen Bottle - Black",
            price: 52,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
          },
          {
            id: 4,
            color: "blue",
            name: "Earthen Bottle - Blue",
            price: 49,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Blue earthenware bottle with cork stopper.",
          },
          {
            id: 5,
            color: "red",
            name: "Earthen Bottle - Red",
            price: 51,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Red ceramic bottle with a natural clay texture and a cork.",
          },
          {
            id: 6,
            color: "yellow",
            name: "Earthen Bottle - Yellow",
            price: 50,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Bright yellow ceramic bottle with a natural cork.",
          },
          {
            id: 7,
            color: "purple",
            name: "Earthen Bottle - Purple",
            price: 53,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Purple earthenware bottle with a matte finish and a cork stopper.",
          },
          {
            id: 8,
            color: "orange",
            name: "Earthen Bottle - Orange",
            price: 49,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Orange ceramic bottle with a cork stopper.",
          },
          {
            id: 9,
            color: "brown",
            name: "Earthen Bottle - Brown",
            price: 50,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Dark brown ceramic bottle with natural clay texture.",
          },
          {
            id: 10,
            color: "white",
            name: "Earthen Bottle - White",
            price: 55,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "White ceramic bottle with a smooth finish and cork stopper.",
          },
        ],
      },
      {
        id: 3,
        name: "Wooden Bowl",
        images: [
          { id: 1, color: "brown", name: "Wooden Bowl - Brown", price: 35, src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg", alt: "Dark brown wooden bowl." },
          { id: 2, color: "white", name: "Wooden Bowl - White", price: 38, src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg", alt: "White wooden bowl with natural finish." },
          {
            id: 3,
            color: "black",
            name: "Earthen Bottle - Black",
            price: 52,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
          },
          {
            id: 4,
            color: "blue",
            name: "Earthen Bottle - Blue",
            price: 49,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Blue earthenware bottle with cork stopper.",
          },
          {
            id: 5,
            color: "red",
            name: "Earthen Bottle - Red",
            price: 51,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
            alt: "Red ceramic bottle with a natural clay texture and a cork.",
          },
          {
            id: 6,
            color: "yellow",
            name: "Earthen Bottle - Yellow",
            price: 50,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Bright yellow ceramic bottle with a natural cork.",
          },
          {
            id: 7,
            color: "purple",
            name: "Earthen Bottle - Purple",
            price: 53,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "Purple earthenware bottle with a matte finish and a cork stopper.",
          },
          {
            id: 8,
            color: "orange",
            name: "Earthen Bottle - Orange",
            price: 49,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
            alt: "Orange ceramic bottle with a cork stopper.",
          },
          {
            id: 9,
            color: "brown",
            name: "Earthen Bottle - Brown",
            price: 50,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
            alt: "Dark brown ceramic bottle with natural clay texture.",
          },
          {
            id: 10,
            color: "white",
            name: "Earthen Bottle - White",
            price: 55,
            src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
            alt: "White ceramic bottle with a smooth finish and cork stopper.",
          },
        ],
      },
    ];

const colorMap = {
  clay: "bg-yellow-800",
  green: "bg-green-600",
  black: "bg-gray-800",
  blue: "bg-blue-600",
  red: "bg-red-600",
  yellow: "bg-yellow-400",
  purple: "bg-purple-600",
  orange: "bg-orange-500",
  brown: "bg-yellow-900",
  white: "bg-gray-100",
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const changeImage = (image) => {
    setSelectedImage(image);
  };

  const handleQuantityChange = (value) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + value));
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === selectedImage.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...selectedImage, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${selectedImage.name} added to cart`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="main-image"
              id="mainImage"
            />
            <div className="thumbnail-container mt-4">
              {product.images.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className={`thumbnail ${selectedImage.id === image.id ? 'opacity-100' : ''}`}
                  onClick={() => changeImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="title">{selectedImage.name}</h2>
            <div className="price-section">
              <span className="price">${selectedImage.price}</span>
            </div>
            <div className="color-options mt-4 flex gap-2">
              {product.images.map((image) => (
                <button
                  key={image.id}
                  onClick={() => changeImage(image)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedImage.id === image.id ? "border-pink-600" : "border-gray-300"
                  } ${colorMap[image.color]} flex items-center justify-center`}
                  aria-label={`Select ${image.color} color`}
                ></button>
              ))}
            </div>
            <div className="mt-6">
              <label className="quantity-label">Quantity</label>
              <div className="quantity-section">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="quantity-button"
                  aria-label="Decrease quantity"
                >
                  <span>−</span>
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="quantity-input"
                  aria-label="Product quantity"
                />
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="quantity-button"
                  aria-label="Increase quantity"
                >
                  <span>+</span>
                </button>
              </div>
            </div>
            <button
              onClick={addToCart}
              className="mt-6 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600"
            >
              Add to Cart
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
