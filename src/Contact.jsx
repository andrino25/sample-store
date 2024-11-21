import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-white to-pink-50 min-h-screen">
      <div className="container px-6 py-16 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 text-sm font-medium text-pink-500 bg-pink-100 rounded-full shadow-md">
            Contact Us
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-gray-800 md:text-5xl">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
            Have questions about our products? We're here to help you find the perfect shade for your beauty journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {/* Email Card */}
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform duration-500 ease-in-out">
              <span className="inline-block p-3 text-pink-500 rounded-full bg-pink-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-semibold text-gray-800">Email</h2>
              <p className="mt-2 text-gray-600">We'll respond within 24 hours</p>
              <a href="mailto:support@vioracosmetics.com" className="mt-2 text-pink-500 hover:text-pink-600 font-medium block">
                support@vioracosmetics.com
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform duration-500 ease-in-out">
              <span className="inline-block p-3 text-pink-500 rounded-full bg-pink-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-semibold text-gray-800">Visit Us</h2>
              <p className="mt-2 text-gray-600">Come visit our store</p>
              <p className="mt-2 text-pink-500">
                Asian College of Technology<br />
                Corner M.J. Cuenco & R. Palma Street<br />
                Cebu City, Philippines
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform duration-500 ease-in-out">
              <span className="inline-block p-3 text-pink-500 rounded-full bg-pink-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-semibold text-gray-800">Call Us</h2>
              <p className="mt-2 text-gray-600">Mon-Sat 9:00 AM - 6:00 PM</p>
              <a href="tel:+639123456789" className="mt-2 text-pink-500 hover:text-pink-600 font-medium block">
                +63 912 345 6789
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[600px] lg:h-full">
              <iframe
                className="w-full h-full"
                title="Viora Cosmetics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.3782333797563!2d123.89386131599956!3d10.29904314523548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999579311910f%3A0xef5e33cb00ffe36c!2sAsian%20College%20of%20Technology!5e0!3m2!1sen!2sph!4v1699984018817!5m2!1sen!2sph"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
