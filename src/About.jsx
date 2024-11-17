import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-20 lg:px-24 md:py-16 md:px-8 py-12 px-6">
      {/* Video Section */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Intro to Makeup Magic!
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Discover the secrets behind the art of makeup. Whether you're a
          beginner or a pro, this video will take you through essential tips and
          tricks to enhance your natural beauty. Dive into the world of colors,
          textures, and techniques that make makeup so captivating!
        </p>
        <div className="w-full h-96 lg:h-[600px] mb-12 flex justify-center items-center overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 transform hover:scale-105">
          <video
            className="w-full h-full object-cover rounded-xl shadow-xl"
            autoPlay
            loop
            muted
            playsInline
            controls
          >
            <source src="/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* About Us Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold leading-9 text-gray-800 pb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            It is a long-established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum. In the first place, we have granted to God,
            and by this, our present charter confirmed for us and our heirs
            forever that the English Church shall be free, and shall have her
            rights entire, and her liberties inviolate.
          </p>
        </div>
        <div className="w-full lg:w-7/12">
          <img
            className="w-full h-full rounded-xl shadow-lg"
            src="https://ca-times.brightspotcdn.com/dims4/default/fdaa77f/2147483647/strip/true/crop/3000x2051+0+0/resize/1200x820!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5c%2F94%2F6be072a140cba6d21278a005c540%2Fmmpr-y1-104c-l.jpg"
            alt="A group of People"
          />
        </div>
      </div>

      {/* Our Story Section */}
<div className="flex flex-col lg:flex-row justify-between gap-12 pt-16 pb-16">
  <div className="w-full lg:w-5/12 flex flex-col justify-center">
    <h1 className="text-4xl font-extrabold leading-9 text-gray-800 pb-6">
      Our Story
    </h1>
    <p className="text-lg text-gray-600">
      It is a long-established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum. In the first place, we have granted to God,
      and by this, our present charter confirmed for us and our heirs
      forever that the English Church shall be free, and shall have her
      rights entire, and her liberties inviolate.
    </p>
  </div>
  <div className="w-full lg:w-7/12 lg:pt-8">
    <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-2 shadow-lg rounded-md">
      <div className="p-6 flex justify-center flex-col items-center hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-lg mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT62-8_sbNicUmE_26wCNGaUKSlwDDZnoOhUonFXgWSZnFp1mQf8zM6mVqzHBJ_eXLBPgo&usqp=CAU"
        />
        <p className="text-xl font-semibold text-gray-800">Black</p>
      </div>
      <div className="p-6 flex justify-center flex-col items-center hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-lg mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
          src="https://townsquare.media/site/74/files/2017/06/pink-ranger.jpg?w=780&q=75"
          alt="Olivia featured Img"
        />
        <p className="text-xl font-semibold text-gray-800">Pink</p>
      </div>
      <div className="p-6 flex justify-center flex-col items-center hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-lg mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmshR2UpoYFSYKt3fGEHIWbVp0mfx5CWgWy147F_Clc_G8Qnn56mEr5aagblxZ1qz1tvo&usqp=CAU"
          alt="Liam featured Img"
        />
        <p className="text-xl font-semibold text-gray-800">Red</p>
      </div>
      <div className="p-6 flex justify-center flex-col items-center hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-lg mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
          src="https://people.com/thmb/1n1uKwpNTnZfVlkuCz6sD4h0Rd0=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/power-rangers-reunion-2023032295-eb36c6d8656a49a69518d99cddd8cbeb.jpg"
          alt="Elijah featured img"
        />
        <p className="text-xl font-semibold text-gray-800">Yellow</p>
      </div>
      <div className="p-6 flex justify-center flex-col items-center hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-lg mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
          src="https://i.ytimg.com/vi/IYAb1fdVkmU/maxresdefault.jpg"
          alt="Elijah featured img"
        />
        <p className="text-xl font-semibold text-gray-800">Blue</p>
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
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pinterest.svg/1200px-Pinterest.svg.png", alt: "Pinterest", href: "https://pinterest.com" },
        { src: "https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg", alt: "Twitter", href: "https://twitter.com" },
        { src: "https://www.svgrepo.com/show/303130/snapchat-logo.svg", alt: "Snapchat", href: "https://snapchat.com" },
        { src: "https://www.logo.wine/a/logo/Telegram_(software)/Telegram_(software)-Logo.wine.svg", alt: "Telegram", href: "https://telegram.org" }
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
