import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//matte liptint insertion
import matteLipTintCherry from '@/assets/MatteLipTint/Cherry.png';
import matteLipTintJane from '@/assets/MatteLipTint/Jane.png';
import matteLipTintJanelle from '@/assets/MatteLipTint/Jannelle.png';
import matteLipTintJessa from '@/assets/MatteLipTint/Jessa.png';
import matteLipTintLalien from '@/assets/MatteLipTint/Lalien.png';
import matteLipTintMae from '@/assets/MatteLipTint/Mae.png';
import matteLipTintMaria from '@/assets/MatteLipTint/Maria.png';
import matteLipTintMeberlene from '@/assets/MatteLipTint/Meberlene.png';
import matteLipTintNiña from '@/assets/MatteLipTint/Niña.png';
import matteLipTintVaughn from '@/assets/MatteLipTint/Vaughn.png';

//lip tint insertion
import Aphrodite from '@/assets/LipTint/Aphrodite.png';
import Artemis from '@/assets/LipTint/Artemis.png';
import Astraea from '@/assets/LipTint/Astraea.png';
import Athena from '@/assets/LipTint/Athena.png';
import Calypso from '@/assets/LipTint/Calypso.png';
import Demeter from '@/assets/LipTint/Demeter.png';
import Psyche from '@/assets/LipTint/Psyche.png';

//gloss insertion
import Clueless from '@/assets/LipGloss/Clueless.png';
import Euphoria from '@/assets/LipGloss/Euphoria.png';
import FaerieSoiree from '@/assets/LipGloss/FaerieSoiree.png';
import Femininomenon from '@/assets/LipGloss/Femininomenon.png';
import MeanGirl from '@/assets/LipGloss/MeanGirl.png';
import NakedInManhattan from '@/assets/LipGloss/NakedInManhattan.png';
import Recess from '@/assets/LipGloss/Recess.png';
import ShowAndTell from '@/assets/LipGloss/ShowAndTell.png';
import WildChild from '@/assets/LipGloss/WildChild.png';

const products = [
  {
    id: 1,
    name: "Matte Lip Tint",
    images: [
      { 
        id: 1, 
        color: "mascaraTear", 
        name: "Matte Lip Tint - Lalien", 
        price: 200, 
        src: matteLipTintLalien, 
        alt: "Matte Lip Tint in Mascara Tear shade" 
      },
      { 
        id: 2, 
        color: "currentMood", 
        name: "Matte Lip Tint - Jannelle", 
        price: 200, 
        src: matteLipTintJanelle, 
        alt: "Matte Lip Tint in Current Mood shade" 
      },
      { 
        id: 3, 
        color: "skinnyDip", 
        name: "Matte Lip Tint - Meberlene", 
        price: 200, 
        src: matteLipTintMeberlene, 
        alt: "Matte Lip Tint in Skinny Dip shade" 
      },
      { 
        id: 4, 
        color: "babyTee", 
        name: "Matte Lip Tint - Cherry", 
        price: 200, 
        src: matteLipTintCherry, 
        alt: "Matte Lip Tint in Baby Tee shade" 
      },
      { 
        id: 5, 
        color: "coquettish", 
        name: "Matte Lip Tint - Maria", 
        price: 200, 
        src: matteLipTintMaria, 
        alt: "Matte Lip Tint in Coquettish shade" 
      },
      { 
        id: 6, 
        color: "julyForever", 
        name: "Matte Lip Tint - Mae", 
        price: 200, 
        src: matteLipTintMae, 
        alt: "Matte Lip Tint in July Forever shade" 
      },
      { 
        id: 7, 
        color: "petalcore", 
        name: "Matte Lip Tint - Jane", 
        price: 200, 
        src: matteLipTintJane, 
        alt: "Matte Lip Tint in Petalcore shade" 
      },
      { 
        id: 8, 
        color: "pinkyPromise", 
        name: "Matte Lip Tint - Niña", 
        price: 200, 
        src: matteLipTintNiña, 
        alt: "Matte Lip Tint in Pinky Promise shade" 
      },
      { 
        id: 9, 
        color: "wildHeart", 
        name: "Matte Lip Tint - Jessa", 
        price: 200, 
        src: matteLipTintJessa, 
        alt: "Matte Lip Tint in Wild at Heart shade" 
      },
      { 
        id: 10, 
        color: "kneeHigh", 
        name: "Matte Lip Tint - Vaughn", 
        price: 200, 
        src: matteLipTintVaughn, 
        alt: "Matte Lip Tint in Knee High shade" 
      },
    ],
  },

  {
    id: 3,
    name: "Lip Tint",
    images: [

      { 
        id: 1, 
        color: "astraea", 
        name: "Lip Tint - Astraea", 
        price: 130, 
        src: Astraea, 
        alt: "Lip Tint in Pink shade" 
      },

      { 
        id: 2, 
        color: "artemis", 
        name: "Lip Tint - Artemis", 
        price: 130, 
        src: Artemis, 
        alt: "Lip Tint in Peach shade" 
      },
      { 
        id: 3, 
        color: "athena", 
        name: "Lip Tint - Athena", 
        price: 130, 
        src: Athena, 
        alt: "Lip Tint in Cherry shade" 
      },
      { 
        id: 4, 
        color: "calypso", 
        name: "Lip Tint - Calypso", 
        price: 130, 
        src: Calypso, 
        alt: "Lip Tint in Peach shade" 
      },
      { 
        id: 5, 
        color: "demeter", 
        name: "Lip Tint - Demeter", 
        price: 130, 
        src: Demeter, 
        alt: "Lip Tint in Pink shade" 
      },
      { 
        id: 6, 
        color: "aphrodite", 
        name: "Lip Tint - Aphrodite", 
        price: 130, 
        src: Aphrodite, 
        alt: "Lip Tint in Cherry shade" 
      },
      {
      id: 7, 
      color: "psyche", 
      name: "Lip Tint - Psyche", 
      price: 130, 
      src: Psyche, 
      alt: "Lip Tint in Pink shade" 
    }
    ],
  },
  {
    id: 2,
    name: "Lip Gloss",
    images: [
      { 
        id: 1, 
        color: "amber", 
        name: "Lip Gloss - Clueless", 
        price: 150, 
        src: Clueless, 
        alt: "Lip Gloss in Amber shade" 
      },
      { 
        id: 2, 
        color: "crystal", 
        name: "Lip Gloss - Euphoria", 
        price: 150, 
        src: Euphoria, 
        alt: "Lip Gloss in Crystal shade" 
      },
      { 
        id: 3, 
        color: "moon", 
        name: "Lip Gloss - Faerie Soirée", 
        price: 150, 
        src: FaerieSoiree, 
        alt: "Lip Gloss in Moon shade" 
      },
      { 
        id: 4, 
        color: "reef", 
        name: "Lip Gloss - Femininomenon", 
        price: 150, 
        src: Femininomenon, 
        alt: "Lip Gloss in Reef shade" 
      },
      { 
        id: 5, 
        color: "stone", 
        name: "Lip Gloss - Mean Girl", 
        price: 150, 
        src: MeanGirl, 
        alt: "Lip Gloss in Stone shade" 
      },
      { 
        id: 6, 
        color: "petal", 
        name: "Lip Gloss - Naked in Manhattan", 
        price: 150, 
        src: NakedInManhattan, 
        alt: "Lip Gloss in Petal shade" 
      },
      { 
        id: 7, 
        color: "pearl", 
        name: "Lip Gloss - Recess", 
        price: 150, 
        src: Recess, 
        alt: "Lip Gloss in Pearl shade" 
      },
      { 
        id: 8, 
        color: "topaz", 
        name: "Lip Gloss - Show & Tell", 
        price: 150, 
        src: ShowAndTell, 
        alt: "Lip Gloss in Topaz shade" 
      },
      { 
        id: 9, 
        color: "ice", 
        name: "Lip Gloss - Wild Child", 
        price: 150, 
        src: WildChild, 
        alt: "Lip Gloss in Ice shade" 
      }
    ],
  },
];

const colorMap = {
  mascaraTear: "bg-[#983f38]",    // Lalien
  currentMood: "bg-[#f3827d]",    // Jannelle
  skinnyDip: "bg-[#e16257]",      // Meberlene
  babyTee: "bg-[#ff6e65]",        // Cherry
  coquettish: "bg-[#d4020f]",     // Maria
  julyForever: "bg-[#ff2440]",    // Mae
  petalcore: "bg-[#fe5465]",      // Jane
  pinkyPromise: "bg-[#ff4e80]",   // Niña
  wildHeart: "bg-[#9e364b]",      // Jessa
  kneeHigh: "bg-[#d66e7f]",       // Vaughn

  pearl: "bg-[#e9e7e6]",          // Recess
  ice: "bg-[#fccac7]",            // Wild Child
  reef: "bg-[#F08080]",           // Femininomenon
  amber: "bg-[#f87d63]",          // Clueless
  moon: "bg-[#d96565]",           // Faerie Soirée
  stone: "bg-[#e37569]",          // Mean Girl
  petal: "bg-[#f06677]",          // Naked in Manhattan
  topaz: "bg-[#d76e5c]",          // Show & Tell
  crystal: "bg-[#904b36]",        // Euphoria

  demeter: "bg-[#e16046]",
  astraea: "bg-[#e04e51]",
  athena: "bg-[#c13236]",
  artemis: "bg-[#d02e3a]",
  psyche: "bg-[#e2534c]",
  aphrodite: "bg-[#ff375a]",
  calypso: "bg-[#e04641]"
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const [selectedProduct, setSelectedProduct] = useState(product);
  const changeImage = (image, product) => {
    setSelectedImage(image);
    setSelectedProduct(product);
  };

  const handleQuantityChange = (value) => {
    setQuantity(prev => {
      const newValue = prev + value;
      if (newValue < 1) return 1;
      if (newValue > 99) return 99;
      return newValue;
    });
  };

  const addToCart = () => {
    if (!selectedImage || !selectedProduct) {
      toast.error("Please select a product and color before adding to the cart.");
      return;
    }

    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const uniqueId = `${selectedProduct.id}-${selectedImage.id}`;
      
      const existingItemIndex = cart.findIndex(item => item.uniqueId === uniqueId);
      
      if (existingItemIndex !== -1) {
        const updatedCart = [...cart];
        const newQuantity = updatedCart[existingItemIndex].quantity + quantity;
        
        if (newQuantity > 99) {
          toast.warning("Maximum quantity limit reached");
          return;
        }
        
        updatedCart[existingItemIndex].quantity = newQuantity;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      } else {
        const newItem = {
          ...selectedImage,
          quantity,
          uniqueId,
          productId: selectedProduct.id,
          colorName: selectedImage.color
        };
        
        localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
      }

      toast.success(`${selectedImage.name} added to cart`, {
        position: "top-center",
        autoClose: 3000,
      });

      setQuantity(1);
      
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add item to cart. Please try again.");
    }
  };

  useEffect(() => {
    return () => {
      // Any cleanup needed
    };
  }, []);

  const productDescriptions = {
    "Lip Gloss": {
      description: "Glossy shine. Luscious lips. Viora's Lip Gloss delivers a stunning, high-shine finish that hydrates and nourishes your lips with every swipe. This non-sticky formula adds a touch of radiant gloss while enhancing your natural lip color for a fuller, plumper appearance.",
      features: [
        "High-Shine Finish: Provides a dazzling, glossy shine that catches the light for a fuller, more luscious look.",
        "Hydrating & Nourishing: Enriched with moisturizing ingredients to keep lips soft, smooth, and hydrated all day.",
        "Non-Sticky Formula: Lightweight and comfortable, with no sticky or greasy feel.",
        "Buildable Color: Apply a single layer for a sheer finish or build up for more intense color and shine.",
        "For All Skin Tones: Available in shades that complement every complexion, perfect for day or night."
      ]
    },
    "Lip Tint": {
      description: "Natural color. Effortless glow. Viora's Lip Tint delivers a lightweight, buildable tint that enhances your lips with a subtle, long-lasting flush of color. This innovative formula provides a fresh, hydrated look while defining your lips with a soft, dewy finish.",
      features: [
        "Lightweight & Buildable: Offers a natural, sheer tint that can be layered for a deeper, more intense color.",
        "Long-Lasting Hydration: Infused with nourishing ingredients to keep lips soft, moisturized, and smooth throughout the day.",
        "Natural, Dewy Finish: Provides a fresh, radiant look with a soft sheen that enhances your natural lip color.",
        "Quick-Dry Formula: Dries quickly without the tacky feel, making it perfect for on-the-go application.",
        "Versatile Shades: Designed to complement all skin tones for an effortlessly beautiful look."
      ]
    },
    "Matte Lip Tint": {
      description: "Matte perfection. Bold color. Viora's Matte Lip Tint offers an intense, smooth finish that glides on effortlessly and stays put all day. This breakthrough formula delivers rich, matte color with a weightless feel, leaving your lips looking perfectly defined and comfortable without the dryness.",
      features: [
        "Bold, Matte Color: Provides intense, full-coverage color with a soft, velvety matte finish.",
        "Long-Lasting Wear: Stays in place for hours without fading or transferring, perfect for all-day wear.",
        "Lightweight Formula: Feels weightless and breathable on lips, ensuring comfort without cracking or drying.",
        "Transfer-Proof: Enjoy all-day confidence with no smudging or budging.",
        "Smooth, Even Application: Designed to glide on smoothly, providing a flawless, even layer of color."
      ]
    }
  };

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    try {
      // Get the product type and shade
      const productType = product.name;
      const shade = selectedImage.name.split('-')[1].trim();
      const reviewKey = `${productType}-${shade}`;

      // Get reviews from localStorage
      const storedReviews = JSON.parse(localStorage.getItem('productReviews') || '{}');
      console.log('Stored Reviews:', storedReviews); // Debug log
      console.log('Review Key:', reviewKey); // Debug log
      
      const shadeReviews = storedReviews[reviewKey] || [];
      console.log('Shade Reviews:', shadeReviews); // Debug log
      
      // Update reviews state
      setReviews(shadeReviews);
    } catch (error) {
      console.error('Error loading reviews:', error);
      setReviews([]);
    }
  }, [selectedImage.name, product.name]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column - Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="flex flex-col h-full space-y-6">
              {/* Main Image Container */}
              <div className="flex justify-center">
                <div className="w-4/5 relative bg-transparent rounded-xl p-6 transition-transform">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                      id="mainImage"
                    />
                  </div>
                </div>
              </div>
            

              {/* Thumbnails */}
              <div className="flex justify-center gap-3 w-4/5 mx-auto overflow-x-auto py-4 px-2">
                {product.images.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => changeImage(image, product)}
                    className={`
                      cursor-pointer 
                      flex-shrink-0 
                      w-16 h-16 
                      rounded-lg 
                      overflow-hidden 
                      transition-all 
                      duration-200
                      ${
                        selectedImage.id === image.id 
                          ? 'ring-2 ring-pink-500 ring-offset-2 shadow-lg transform scale-105' 
                          : 'hover:ring-2 hover:ring-pink-300 hover:ring-offset-1'
                      }
                    `}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`
                        w-full 
                        h-full 
                        object-cover 
                        transition-opacity 
                        duration-200
                        ${selectedImage.id === image.id ? 'opacity-100' : 'opacity-75 hover:opacity-100'}
                      `}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="w-full md:w-1/2 px-4 flex flex-col h-full">
            {/* Title and Price */}
            <div className="mb-6">
              <h2 className="title">{selectedImage.name}</h2>
              <div className="price-section">
                <span className="price">₱{selectedImage.price}</span>
              </div>
            </div>

            
            {/* Shade Guide */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Shade Guide
              </h3>
              
              {/* Dynamic Shade Name Display */}
              <div className="mb-4">
                <span className="text-gray-600 font-medium">
                  <span className="text-pink-600 font-semibold">
                    {selectedImage.name.split('-')[1].trim()}
                  </span>
                </span>
              </div>

              <div className="color-options flex flex-wrap gap-2">
                {product.images.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => changeImage(image, product)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedImage?.id === image.id ? "border-pink-600" : "border-gray-300"
                    } ${colorMap[image.color]} transition-all duration-200 hover:scale-110`}
                    aria-label={`Select ${image.name.split('-')[1].trim()} shade`}
                  />
                ))}
              </div>
            </div>


            {/* Product Description */}
            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed text-justify">
                {productDescriptions[product.name].description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {productDescriptions[product.name].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span className="text-gray-600 text-justify">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

             {/* Quantity Section */}
             <div className="mb-6">
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

            {/* Add to Cart - Aligned with scrollable images */}
            <div className="mt-auto w-4/5 mx-auto">
              <button
                onClick={addToCart}
                className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
            <ToastContainer />

            <div className="mt-8 border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Ratings & Reviews for {selectedImage.name}
                </h3>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-pink-600 mr-2">
                    {reviews.length > 0 
                      ? (reviews.reduce((acc, rev) => acc + Number(rev.rating), 0) / reviews.length).toFixed(1)
                      : '0.0'}
                  </span>
                  <span className="text-gray-500">
                    ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
                  </span>
                </div>
              </div>

              {reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">{review.customerName}</span>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600">{review.review}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-4">
                  No reviews yet for {selectedImage.name.split('-')[1].trim()}. Be the first to review this shade!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;