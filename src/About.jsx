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
            <source src="/video.mp4" type="video/mp4" />
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
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/456991574_1989568564817058_4063411312545261057_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFZoHb3NDTPCkxScVgHwtQyp4uPNyEWyqKni483IRbKooJE7DE3ApsiHixAIpSiFOcJ7sBkVFD2_viWVBQLNbru&_nc_ohc=hCV4Rs3hm54Q7kNvgEW3xAT&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFHCdct4ieubt_zTvvnNRDmoWTn1X6V_E3Ef1QAi-2RKA&oe=675717C3"
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
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/451445881_484055514617244_2690744594872706815_n.png?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGAXhmqa8u1_ZHt_1xaG9GRKlOfHIYrY2gqU58chitjaOZh1p66sOVfwLGa7Bj3iVt47MS1l3NfX1-7sVsQns6a&_nc_ohc=IOA8Ww4k5rIQ7kNvgFctIaG&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QHojD-so8wjKW6sfXeYDAbR5n_eLDa1k8vujQRbyQ2Alg&oe=675727CB"
        />
        <p className="text-xl font-semibold text-gray-800">Mae</p>
      </div>
      <div className="p-6 flex justify-center flex-col items-center hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-lg mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
          src="https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/432089697_433410805748931_266264513057446619_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGluVejZNuzhCLXY2hiDhsXHVe8RgcID4AdV7xGBwgPgDhJUWfOi5A7eePpSDnYkSLenCksHMsYco_rzX8H8r0V&_nc_ohc=5XAWNH8t9g4Q7kNvgFz5KOb&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&_nc_gid=ADDcEO37nVqrRmEZncGMY-4&oh=00_AYC_0X5J7a8gXELjpEpSVi7sfR1Q1mTwnwHdIcMlh1Jomg&oe=67356920"
          alt="Olivia featured Img"
        />
        <p className="text-xl font-semibold text-gray-800">Faith</p>
      </div>
      <div className="p-6 flex justify-center flex-col items-center hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-lg mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462565629_520098110869183_2375903291741446473_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFusrmfDoqZqRUNtQHau8VmNEFEhIMX7Wg0QUSEgxftaMxTltuBFYGP6sDDRWRl463w3aOEY3XItxYFvp9WgDPR&_nc_ohc=3TltFMRHnEgQ7kNvgF4kVjH&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGq6BuTzQrECT3jDdgZ-mCuLmfvPfH2is8ilZGvYCiD8g&oe=6757264C"
          alt="Liam featured Img"
        />
        <p className="text-xl font-semibold text-gray-800">Espe</p>
      </div>
      <div className="p-6 flex justify-center flex-col items-center hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-lg mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462558994_1189589622119198_836307702456921517_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFiLf9YWNYNJOSK3OY76DkEMXMUy3LL2usxcxTLcsva612EVkt-Cb-u1lQZdnQq_a2PZiKPn1T8YxeLxSUxsECD&_nc_ohc=TebzPTQ-GPAQ7kNvgHAmvoj&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGwB4AE2PwtQGzHO6ySmWWSnmobW1M26lhXHl-PyArveg&oe=67572A42"
          alt="Elijah featured img"
        />
        <p className="text-xl font-semibold text-gray-800">Mae(2)</p>
      </div>
      <div className="p-6 flex justify-center flex-col items-center hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-lg mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/461261832_1181938243103381_1751628103127798548_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeE5ipgZcPG3SLY1CjLoixdwMMsD6RHLasEwywPpEctqwbiWP_5rSumjnU1CCm9_TQCtYm2QfSCGlBO9Jh9_dxEh&_nc_ohc=nqtoOmMAjFkQ7kNvgFXsrYA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QFe-EUjf6XsVwoExkGAV2lfjn7BmHqfuNL476KNQUqrog&oe=67571AA5"
          alt="Elijah featured img"
        />
        <p className="text-xl font-semibold text-gray-800">Bimbs</p>
      </div>
    </div>
  </div>
</div>

      {/* Social Media Section with Footer */}
      <div className="bg-gray-900 text-white py-16">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Follow Us on Social Media
          </h2>
          <p className="text-xl text-center mb-8">
            Stay connected with us and keep up with the latest updates! Follow
            us on our social media channels:
          </p>
          <div className="flex space-x-8 justify-center">
            {/* Social Media Icons */}
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
                className="transform hover:scale-125 transition-all"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="h-12 w-12 rounded-full shadow-xl hover:shadow-2xl transition-all"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center text-sm text-gray-400 py-8">
          <p>&copy; 2024 Makeup Magic. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
