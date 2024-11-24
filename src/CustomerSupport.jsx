import React, { useState, useEffect } from "react";
import icon from '@/assets/bot-icon.gif';
import personIcon from '@/assets/person-icon.png';

const qa = [
  // Greetings
  {
    questions: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings"],
    answer: "Hello! 👋 Welcome to Viora Cosmetics Customer Support. How can I help you today?"
  },
  
  // Shipping (Modified)
  {
    questions: [
      "shipping",
      "delivery",
      "shipping options",
      "delivery options",
      "shipping time",
      "delivery time",
      "shipping fee",
      "delivery fee",
      "shipping cost",
      "how much is shipping",
      "how much is delivery",
      "when will my order arrive",
      "delivery schedule",
      "shipping schedule"
    ],
    answer: "We offer the following shipping options:\n\n" +
           "• Standard Shipping (3-5 business days): ₱100\n" +
           "• Express Shipping (1-2 business days): ₱200\n" +
           "• FREE shipping for orders over ₱1,000\n\n" +
           "Note: Delivery times may vary for remote areas."
  },

  // Order Process
  {
    questions: ["how to order", "how can i order", "how to place an order", "ordering process", "purchase process", "buying process", "order"],
    answer: "Here's how you can place an order with us:\n\n" +
           "1. Browse our products and add items to your cart\n" +
           "2. Click the cart icon to review your items\n" +
           "3. Click 'Proceed to Checkout'\n" +
           "4. Fill in your shipping details\n" +
           "5. Choose your payment method\n" +
           "6. Confirm your order\n\n" +
           "Need more help? Feel free to ask!"
  },

  // Returns
  {
    questions: ["return policy", "returns", "can i return", "return process", "refund", "return"],
    answer: "Our Return Policy:\n\n" +
           "• 14-day return window\n" +
           "• Product must be unused and unopened\n" +
           "• Original packaging required\n" +
           "• Refund processed within 5-7 business days\n\n" +
           "To initiate a return, please contact our customer service with your order number."
  },

  // Product Duration
  {
    questions: ["how long do products last", "product duration", "lip product lasting", "wear time", "lasting power"],
    answer: "Product Wear Time:\n\n" +
           "• Matte Lip Tint: Up to 12 hours\n" +
           "• Lip Tint: 6-8 hours\n" +
           "• Lip Gloss: 4-6 hours\n\n" +
           "Note: Duration may vary based on eating, drinking, and other factors."
  },

  // Payment Methods
  {
    questions: ["payment methods", "payment options", "how to pay", "accepted payments", "cod", "cash on delivery", "payment", "payments"],
    answer: "We accept the following payment methods:\n\n" +
           "💳 Credit/Debit Cards\n" +
           "📱 E-wallets (GCash, PayMaya)\n" +
           "💰 Cash on Delivery (COD)\n" +
           "All transactions are secure and encrypted."
  },

  // Help
  {
    questions: ["help", "support", "contact", "assistance", "customer service"],
    answer: "I'm here to help! You can:\n\n" +
           "1. Chat with us here 24/7\n" +
           "2. Email us at support@viora.com\n" +
           "3. Call us at +63 123 456 7890\n" +
           "4. Visit our FAQ page\n\n" +
           "How can I assist you today?"
  },

  // Lip Gloss Ingredients
  {
    questions: ["lip gloss ingredients", "what's in lip gloss", "lip gloss contents", "what is lip gloss made of", "lip gloss composition"],
    answer: "Our Lip Gloss contains these key ingredients:\n\n" +
           "• Shea Butter: Rich moisturizing and softening properties\n" +
           "• Jojoba Oil: Hydrates and restores skin barrier\n" +
           "• Beeswax: Natural emulsifier and protective layer\n" +
           "• Coconut Oil: Deep moisturization\n" +
           "• Vitamin E: Antioxidant protection\n\n" +
           "Benefits:\n" +
           "✨ Deep moisturization\n" +
           "✨ Long-lasting shine\n" +
           "✨ Environmental protection"
  },

  // Lip Tint Ingredients
  {
    questions: ["lip tint ingredients", "liptint ingredients", "what's in lip tint", "lip tint contents", "what is lip tint made of", "lip tint composition"],
    answer: "Our Lip Tint contains these key ingredients:\n\n" +
           "• Glycerin: Keeps lips hydrated and plump\n" +
           "• Honey: Natural moisturizer with soothing properties\n" +
           "• Aloe Vera Extract: Soothes and protects sensitive lips\n" +
           "• Natural Colorants: For beautiful, customizable shades\n" +
           "• Vitamin E: Antioxidant protection\n\n" +
           "Benefits:\n" +
           "✨ Natural color flush\n" +
           "✨ Hydrating formula\n" +
           "✨ Long-lasting wear"
  },

  // Matte Lip Tint Ingredients
  {
    questions: ["matte lip tint ingredients", "matte liptint ingredients", "what's in matte lip tint", "matte lip tint contents", "what is matte lip tint made of", "matte lip tint composition"],
    answer: "Our Matte Lip Tint contains these key ingredients:\n\n" +
           "• Shea Butter: Intense hydration\n" +
           "• Jojoba Oil: Skin barrier restoration\n" +
           "• Almond Oil: Rich in nourishing vitamins\n" +
           "• Kaolin Clay: Creates smooth matte finish\n" +
           "• Vitamin E: Environmental protection\n\n" +
           "Benefits:\n" +
           "✨ Rich pigmentation\n" +
           "✨ Transfer-proof wear\n" +
           "✨ Moisturizing matte finish"
  },

  // Product Safety and Usage
  {
    questions: ["safety", "usage","how to use", "usage instructions", "application instructions", "how to apply", "safety instructions", "product safety", "handling instructions"],
    answer: "Safety & Usage Instructions:\n\n" +
           "Safety Precautions:\n" +
           "• For external use only\n" +
           "• Avoid contact with eyes\n" +
           "• Discontinue if irritation occurs\n" +
           "• Keep away from children\n\n" +
           "Application Tips:\n" +
           "1. Apply directly using applicator\n" +
           "2. Exfoliate lips before application\n" +
           "3. Reapply as needed for optimal results"
  },

  // Product Benefits
  {
    questions: ["benefits", "product benefits", "advantages", "why use", "what are the benefits", "product advantages"],
    answer: "Benefits of Our Lip Products:\n\n" +
           "Lip Gloss:\n" +
           "• Deep hydration with Shea Butter & oils\n" +
           "• Long-lasting shine without stickiness\n" +
           "• Antioxidant protection\n\n" +
           "Lip Tint:\n" +
           "• Natural, buildable color\n" +
           "• All-day hydration\n" +
           "• Soothing formula\n\n" +
           "Matte Lip Tint:\n" +
           "• Rich, even pigmentation\n" +
           "• Transfer-proof wear\n" +
           "• Moisturizing matte finish"
  }
];

const CustomerSupport = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Send initial greeting when component mounts
  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          type: "bot",
          text: "Hello! 👋 I'm Viora's virtual assistant. How can I help you today?\n\nYou can ask me about:\n• Ordering Process\n• Shipping Options\n• Payment Methods\n• Returns & Refunds\n• Product Safety\n• Product Details"
        }
      ]);
    }, 500);
  }, []);

  const findAnswer = (userInput) => {
    const normalizedInput = userInput.toLowerCase().trim();
    
    // Special case for "product details" query
    if (normalizedInput.includes("product details")) {
      return "Our Product Details:\n\n" +
             "1. Lip Gloss:\n" +
             "• Shea Butter: Rich moisturizing properties\n" +
             "• Jojoba Oil: Hydrates and restores\n" +
             "• Beeswax: Natural protective layer\n" +
             "• Coconut Oil: Deep moisturization\n" +
             "• Vitamin E: Antioxidant protection\n\n" +
             "2. Lip Tint:\n" +
             "• Glycerin: Keeps lips plump\n" +
             "• Honey: Natural moisturizer\n" +
             "• Aloe Vera: Soothes and protects\n" +
             "• Natural Colorants: Beautiful shades\n" +
             "• Vitamin E: Antioxidant protection\n\n" +
             "3. Matte Lip Tint:\n" +
             "• Shea Butter: Intense hydration\n" +
             "• Jojoba Oil: Barrier restoration\n" +
             "• Almond Oil: Nourishing vitamins\n" +
             "• Kaolin Clay: Matte finish\n" +
             "• Vitamin E: Environmental protection";
    }
    
    // First check for exact matches
    for (const item of qa) {
      if (item.questions.some(question => 
        normalizedInput === question.toLowerCase()
      )) {
        return item.answer;
      }
    }
    
    // Then check for partial matches (non-greetings)
    for (const item of qa) {
      if (item.questions[0] !== "hello") {
        if (item.questions.some(question => 
          normalizedInput.includes(question.toLowerCase())
        )) {
          return item.answer;
        }
      }
    }
    
    // Then check for greetings
    const greetingItem = qa.find(item => item.questions[0] === "hello");
    if (greetingItem && greetingItem.questions.some(greeting => 
      normalizedInput.includes(greeting)
    )) {
      return greetingItem.answer;
    }
    
    // If no match found, return the default response
    return "I apologize, but I couldn't understand your question. 🤔\n\n" +
           "You can try asking about:\n" +
           "• Product Details\n" +
           "• Shipping & Delivery\n" +
           "• Payment Methods\n" +
           "• Order Process\n" +
           "• Returns & Refunds\n" +
           "• Product Safety\n\n" +
           "Or contact our support team:\n" +
           "📧 support@viora.com\n" +
           "📞 +63 123 456 7890";
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { type: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = findAnswer(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: response }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-pink-500 to-pink-400 text-white p-6 rounded-t-lg">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={icon}
                alt="Chatbot Icon"
                className="w-16 h-16 rounded-full border-2 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Viora Customer Support</h1>
              <p className="text-sm opacity-90 font-medium">Available 24/7 • Typically replies instantly</p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="h-[400px] overflow-y-auto border-t border-pink-300 p-6 bg-gradient-to-b from-pink-50 to-white">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-6 flex items-end gap-3 ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.type === "bot" && (
                <div className="flex flex-col items-center gap-1">
                  <img
                    src={icon}
                    alt="Bot"
                    className="w-10 h-10 rounded-full border-2 border-pink-200 shadow-md"
                  />
                  <span className="text-xs text-gray-500">Viora Bot</span>
                </div>
              )}
              <div
                className={`max-w-[70%] p-4 rounded-2xl shadow-md ${
                  msg.type === "user"
                    ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-br-none transform hover:scale-[1.02] transition-transform duration-200"
                    : "bg-white border border-pink-200 rounded-bl-none transform hover:scale-[1.02] transition-transform duration-200"
                }`}
              >
                <pre className={`whitespace-pre-wrap font-sans text-[15px] leading-relaxed ${
                  msg.type === "user" ? "text-white" : "text-gray-800"
                }`}>
                  {msg.text}
                </pre>
              </div>
              {msg.type === "user" && (
                <div className="flex flex-col items-center gap-1">
                  <img
                    src={personIcon}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-pink-200 shadow-md"
                  />
                  <span className="text-xs text-gray-500">You</span>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-end gap-3 mb-6">
              <div className="flex flex-col items-center gap-1">
                <img
                  src={icon}
                  alt="Bot"
                  className="w-10 h-10 rounded-full border-2 border-pink-200 shadow-md"
                />
                <span className="text-xs text-gray-500">Typing...</span>
              </div>
              <div className="bg-white border border-pink-200 p-4 rounded-2xl shadow-md rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 bg-pink-500 rounded-full animate-bounce"></div>
                  <div className="w-2.5 h-2.5 bg-pink-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2.5 h-2.5 bg-pink-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex items-center p-6 border-t border-pink-300 bg-white rounded-b-lg">
          <input
            type="text"
            className="flex-1 border-2 border-pink-300 rounded-l-xl p-4 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-gray-700 text-[15px]"
            placeholder="Type your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-r-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-200 flex items-center gap-2 font-medium"
          >
            <span>Send</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-600 bg-white p-4 rounded-lg shadow-md">
        <p className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>Need further assistance? Contact our 24/7 support at</span>
          <a href="mailto:support@viora.com" className="text-pink-500 hover:underline">support@vioracosmetics.com</a>
        </p>
        <p className="mt-2 flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>Or call us at:</span>
          <a href="tel:+63123456789" className="text-pink-500 hover:underline">+63 123 456 7890</a>
        </p>
      </div>
    </div>
  );
};

export default CustomerSupport;
