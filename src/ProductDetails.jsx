import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

import Aphrodite from '@/assets/LipTint/Aphrodite.png';
import Artemis from '@/assets/LipTint/Artemis.png';
import Astraea from '@/assets/LipTint/Astraea.png';
import Athena from '@/assets/LipTint/Athena.png';
import Calypso from '@/assets/LipTint/Calypso.png';
import Demeter from '@/assets/LipTint/Demeter.png';
import Psyche from '@/assets/LipTint/Psyche.png';

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
    id: 2,
    name: "Lip Tint",
    images: [
      { 
        id: 1, 
        color: "aphrodite", 
        name: "Lip Tint - Aphrodite", 
        price: 180, 
        src: Aphrodite, 
        alt: "Lip Tint in Cherry shade" 
      },
      { 
        id: 2, 
        color: "artemis", 
        name: "Lip Tint - Artemis", 
        price: 180, 
        src: Artemis, 
        alt: "Lip Tint in Peach shade" 
      },
      { 
        id: 3, 
        color: "astraea", 
        name: "Lip Tint - Astraea", 
        price: 180, 
        src: Astraea, 
        alt: "Lip Tint in Pink shade" 
      },
      { 
        id: 4, 
        color: "athena", 
        name: "Lip Tint - Athena", 
        price: 180, 
        src: Athena, 
        alt: "Lip Tint in Cherry shade" 
      },
      { 
        id: 5, 
        color: "calypso", 
        name: "Lip Tint - Calypso", 
        price: 180, 
        src: Calypso, 
        alt: "Lip Tint in Peach shade" 
      },
      { 
        id: 6, 
        color: "demeter", 
        name: "Lip Tint - Demeter", 
        price: 180, 
        src: Demeter, 
        alt: "Lip Tint in Pink shade" 
      },
      {
      id: 7, 
      color: "psyche", 
      name: "Lip Tint - Psyche", 
      price: 180, 
      src: Psyche, 
      alt: "Lip Tint in Pink shade" 
    }
    ],
  },
  {
    id: 3,
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
              <span className="price">₱{selectedImage.price}</span>
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
