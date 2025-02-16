import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10 px-6">

      <div className="max-w-6xl text-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className="text-xl font-bold mb-4">School</h1>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 transition-colors cursor-pointer">About</li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">Feature</li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">Menu</li>
          </ul>
        </div>
        <div data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className="text-xl font-bold mb-4">Support</h1>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 transition-colors cursor-pointer">Help Center</li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">FAQs</li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className="text-xl font-bold mb-4">Services</h1>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 transition-colors cursor-pointer">Courses</li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">Certifications</li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">Workshops</li>
          </ul>
        </div>
        <div className=""
        data-aos="fade-up-right">
          <p className="text-sm text-gray-400 mb-4">Stay connected with us on social media:</p>
          <div className="flex gap-4 justify-center">
            <FaInstagram className="text-pink-400 text-2xl cursor-pointer hover:text-pink-500 transition-all" 
              data-aos="zoom-out"
            />
            <FaFacebook className="text-blue-400 text-2xl cursor-pointer hover:text-blue-500 transition-all" data-aos="zoom-out"/>
            <FaWhatsapp className="text-green-400 text-2xl cursor-pointer hover:text-green-500 transition-all" data-aos="zoom-out"/>
          </div>
        </div>

      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>All rights reserved © Coder@2025</p>
      </div>
    </footer>
  );
};

export default Footer;
