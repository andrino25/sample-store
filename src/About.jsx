import React from "react";

import prod1 from '@/assets/prod1.png';
import prod2 from '@/assets/prod3.png';
import prod3 from '@/assets/prod2.png';
import aboutPicture from '@/assets/pic.png';
import about1 from '@/assets/about_pic1.png';
import about2 from '@/assets/about_pic2.png';
import about3 from '@/assets/about_pic3.png';

const About = () => {
  return (
    
    <div className="2xl:container 2xl:mx-auto lg:py-20 lg:px-24 md:py-16 md:px-8 py-12 px-6">
      {/* Product Information Section */}
      <div className="py-16">
        {/* Matte Lip Tint */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              src={prod1}
              alt="Matte Lip Tint"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h3 className="text-3xl font-bold mb-4">Matte Lip Tint</h3>
            <p className="text-gray-600 mb-6">
              Matte perfection. Bold color. Viora's Matte Lip Tint offers an intense, smooth finish that glides on effortlessly and stays put all day.
            </p>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Bold, Matte Color: Provides intense, full-coverage color with a soft, velvety matte finish.</li>
                <li>Long-Lasting Wear: Stays in place for hours without fading or transferring.</li>
                <li>Lightweight Formula: Feels weightless and breathable on lips.</li>
                <li>Transfer-Proof: Enjoy all-day confidence with no smudging.</li>
                <li>Smooth, Even Application: Designed to glide on smoothly.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lip Tint */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              src={prod3}
              alt="Lip Tint"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h3 className="text-3xl font-bold mb-4">Lip Tint</h3>
            <p className="text-gray-600 mb-6">
              Natural color. Effortless glow. Viora's Lip Tint delivers a lightweight, buildable tint that enhances your lips with a subtle, long-lasting flush of color.
            </p>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Lightweight & Buildable: Offers a natural, sheer tint that can be layered.</li>
                <li>Long-Lasting Hydration: Infused with nourishing ingredients.</li>
                <li>Natural, Dewy Finish: Provides a fresh, radiant look.</li>
                <li>Quick-Dry Formula: Perfect for on-the-go application.</li>
                <li>Versatile Shades: Designed to complement all skin tones.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lip Gloss */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              src={prod2}
              alt="Lip Gloss"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h3 className="text-3xl font-bold mb-4">Lip Gloss</h3>
            <p className="text-gray-600 mb-6">
              Glossy shine. Luscious lips. Viora's Lip Gloss delivers a stunning, high-shine finish that hydrates and nourishes your lips with every swipe.
            </p>
            <div className="space-y-3">
              <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>High-Shine Finish: Provides a dazzling, glossy shine.</li>
                <li>Hydrating & Nourishing: Enriched with moisturizing ingredients.</li>
                <li>Non-Sticky Formula: Lightweight and comfortable wear.</li>
                <li>Buildable Color: From sheer to intense coverage.</li>
                <li>For All Skin Tones: Shades to complement every complexion.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold leading-9 text-gray-800 pb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
          Viora Cosmetics is a beauty brand dedicated to making self-expression accessible to all. We offer a vibrant range of high-quality, long-lasting lip products in shades that complement every skin tone—at prices that empower everyone to embrace their unique style. With a focus on inclusivity, empowerment, and affordability, our products are designed to help individuals of all backgrounds confidently express their personality.

          </p>
        </div>
        <div className="w-full lg:w-7/12">
          <img
            className="w-full h-full rounded-xl shadow-lg"
            src={aboutPicture}
            alt="A group of People"
          />
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={about1}  // Replace with your image path
              alt="Gallery Image 1"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={about2}  // Replace with your image path
              alt="Gallery Image 2"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={about3}  // Replace with your image path
              alt="Gallery Image 3"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section with Footer */}
      <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col items-center mb-12">
    <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 text-center">
      Follow Us on Social Media
    </h2>
    <p className="text-lg sm:text-xl text-center mb-8">
      Stay connected with us and keep up with the latest updates! Follow us on our social media channels:
    </p>
    <div className="flex flex-wrap space-x-4 sm:space-x-8 justify-center">
      {[
        { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", alt: "Facebook", href: "https://facebook.com" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png", alt: "YouTube", href: "https://youtube.com" },
        { src: "https://img.freepik.com/premium-vector/tiktok-logo-sticker_941327-31.jpg?semt=ais_hybrid", alt: "TikTok", href: "https://tiktok.com" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", alt: "Instagram", href: "https://instagram.com" },
        { src: "https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg", alt: "Twitter", href: "https://twitter.com" },
      ].map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="m-2 transform hover:scale-110 transition-all"
        >
          <img
            src={social.src}
            alt={social.alt}
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-xl hover:shadow-2xl transition-all"
          />
        </a>
      ))}
    </div>
  </div>

  {/* Footer Section */}
  <div className="text-center text-xs sm:text-sm text-gray-400 py-8">
    <p>&copy; 2024 Makeup Magic. All rights reserved.</p>
  </div>
</div>

    </div>
  );
};

export default About;
