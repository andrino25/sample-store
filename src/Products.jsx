import React, { useState } from "react";

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

const Products = () => {
  const [selectedImages, setSelectedImages] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.images[0]; // Select the first image of each product by default
      return acc;
    }, {})
  );

  const handleSelectImage = (productId, image) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [productId]: image,
    }));
  };

  const addToCart = (productId) => {
    const selectedImage = selectedImages[productId];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === selectedImage.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...selectedImage, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${selectedImage.name} added to cart`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Stylish Header Section */}
      <div className="w-full bg-pink-500 text-white py-6 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Welcome to Our Product Showcase</h1>
        <p className="text-lg mb-8">Discover the perfect product for your needs. Browse through a variety of unique variations.</p>
        <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
        <p className="text-md font-light">Choose your favorite color and add it to your cart!</p>
      </div>
  
      {/* Product Display Section */}
      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="flex justify-center space-x-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white max-w-sm p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <img
                  src={selectedImages[product.id].src}
                  alt={selectedImages[product.id].alt}
                  className="w-full h-64 object-cover object-center rounded-md"
                />
              </div>
  
              <h3 className="text-lg font-medium text-gray-800">{selectedImages[product.id].name}</h3>
              <p className="mt-1 text-lg font-semibold text-gray-900">${selectedImages[product.id].price}</p>
  
              <div className="mt-4 flex flex-wrap gap-2 justify-start">
                {product.images.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => handleSelectImage(product.id, image)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedImages[product.id].id === image.id ? "border-indigo-600" : "border-gray-300"
                    } ${colorMap[image.color]} flex items-center justify-center`}
                    aria-label={`Select ${image.color} color`}
                  ></button>
                ))}
              </div>
  
              <button
                onClick={() => addToCart(product.id)}
                className="mt-6 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default Products;
