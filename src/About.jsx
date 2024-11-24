import React, { useState } from "react";

import aboutPicture from '@/assets/pic.png';
import about1 from '@/assets/about_pic1.png';
import about2 from '@/assets/about_pic2.png';
import about3 from '@/assets/about_pic3.png';

const About = () => {
  return (
    
    <div className="2xl:container 2xl:mx-auto lg:py-20 lg:px-24 md:py-16 md:px-8 py-12 px-6">
    
      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold leading-9 text-gray-800 pb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-600 text-justify">
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

      {/* Sustainability and Ethics Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Commitment to Sustainability & Ethics</h2>
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Sustainability */}
          <div className="space-y-6">
            {/* Environmental Sustainability */}
            <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl shadow-lg p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-pink-500 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.293 3.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM14 4l2 2-9 9-3 1 1-3 9-9z"/>
                </svg>
                Environmental Sustainability
              </h3>
              <div className="space-y-3 text-gray-600">
                {[
                  { title: "Eco-friendly Packaging", desc: "Recyclable and biodegradable packaging from recycled materials" },
                  { title: "Cruelty-Free", desc: "Certified cruelty-free with no animal testing at any stage" },
                  { title: "Sustainable Sourcing", desc: "Ethically sourced ingredients supporting sustainable agriculture" },
                  { title: "Energy Efficiency", desc: "Powered by renewable energy with optimized consumption" },
                  { title: "Zero-Waste Manufacturing", desc: "Zero-waste approach with complete material recycling" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 hover:bg-pink-50 rounded-lg transition-colors">
                    <span className="text-pink-400 mt-1">•</span>
                    <p>
                      <span className="font-semibold text-pink-600">{item.title}:</span> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Sustainability */}
            <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl shadow-lg p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-pink-500 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                Social Sustainability
              </h3>
              <div className="space-y-3 text-gray-600">
                {[
                  { title: "Diversity and Inclusion", desc: "Marketing campaigns featuring diverse representation" },
                  { title: "Fair Labor", desc: "Safe working conditions and fair wages across our supply chain" },
                  { title: "Community Support", desc: "Product donations and partnerships with local NGOs" },
                  { title: "Empowerment", desc: "Programs promoting self-expression and confidence" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 hover:bg-pink-50 rounded-lg transition-colors">
                    <span className="text-pink-400 mt-1">•</span>
                    <p>
                      <span className="font-semibold text-pink-600">{item.title}:</span> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Ethics */}
          <div className="space-y-6">
            {/* Integrity and Business Ethics */}
            <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl shadow-lg p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-pink-500 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Business Ethics
              </h3>
              <div className="space-y-3 text-gray-600">
                {[
                  { title: "Ingredient Transparency", desc: "Clear labeling and information for informed decisions" },
                  { title: "Fair Pricing", desc: "Transparent pricing with no hidden fees" },
                  { title: "Honest Marketing", desc: "Claims supported by rigorous testing" },
                  { title: "Data Security", desc: "Strong customer privacy and data protection measures" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 hover:bg-pink-50 rounded-lg transition-colors">
                    <span className="text-pink-400 mt-1">•</span>
                    <p>
                      <span className="font-semibold text-pink-600">{item.title}:</span> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Involvement */}
            <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl shadow-lg p-8 border border-pink-100">
              <h3 className="text-2xl font-bold text-pink-500 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                Community Involvement
              </h3>
              <div className="space-y-3 text-gray-600">
                {[
                  { title: "Nonprofit Partnerships", desc: "Supporting beauty, wellness, and empowerment initiatives" },
                  { title: "Workshops", desc: "Beauty workshops for underserved communities" },
                  { title: "Giving Back", desc: "Regular product donations to those in need" },
                  { title: "Local Support", desc: "Partnerships with local organizations and communities" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 hover:bg-pink-50 rounded-lg transition-colors">
                    <span className="text-pink-400 mt-1">•</span>
                    <p>
                      <span className="font-semibold text-pink-600">{item.title}:</span> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <FAQs />

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

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are your shipping options?",
      answer: "We offer standard shipping (3-5 business days) and express shipping (1-2 business days) nationwide. Free shipping is available for orders over ₱1,000."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Yes! All Viora Cosmetics products are 100% cruelty-free. We never test on animals and work only with cruelty-free suppliers."
    },
    {
      question: "Do you accept returns?",
      answer: "We accept returns within 14 days of purchase for unused and unopened products in their original packaging. Please contact our customer service for the return process."
    },
    {
      question: "Are your products safe for sensitive skin?",
      answer: "Our products are dermatologically tested and suitable for most skin types. However, we recommend doing a patch test before first use if you have sensitive skin."
    },
    {
      question: "How long do your lip products last?",
      answer: "Our lip products typically last 6-8 hours with normal wear. The Matte Lip Tint offers the longest wear time of up to 12 hours."
    },
    {
      question: "How can I place an order?",
      answer: "You can place an order directly through our website. Simply browse our products, add them to your cart, and proceed to checkout."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, e-wallets (like GCash and PayMaya), and cash on delivery (COD) for your convenience."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-6 pt-0 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
