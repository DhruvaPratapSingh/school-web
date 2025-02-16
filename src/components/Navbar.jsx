import { useState } from "react";
import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 w-full bg-gradient-to-r from-green-700 via-sky-600 to-green-700 flex justify-between items-center sticky shadow-2xl top-0 z-50">
      <div className="flex items-center gap-4 font-bold"
      data-aos="fade-down-left">
        <span className="text-4xl text-yellow-300">
          <FaGraduationCap />
        </span>
        <h1 className="text-2xl text-yellow-300">School</h1>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes className="text-3xl cursor-pointer text-white" /> : <FaBars className="text-3xl cursor-pointer text-white" />}
      </div>
      <ul className="hidden md:flex gap-8 text-white text-lg"
      data-aos="fade-down-right">
        <li className="hover:border-b-2 hover:border-yellow-300">
          <a href="/">Home</a>
        </li>
        <li className="hover:border-b-2 hover:border-yellow-300">
          <a href="/contact">Contact</a>
        </li>
        <li className="hover:border-b-2 hover:border-yellow-300">
          <a href="/services">Services</a>
        </li>
        <li className="hover:border-b-2 hover:border-yellow-300">
          <a href="/about">About</a>
        </li>
      </ul>
      <div className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
          <FaTimes className="text-3xl text-white cursor-pointer" onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col gap-6 text-white text-xl p-6">
          <li onClick={toggleMenu}>
            <a href="/" className="hover:border-b-2 hover:border-yellow-300 block">Home</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/contact" className="hover:border-b-2 hover:border-yellow-300 block">Contact</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/services" className="hover:border-b-2 hover:border-yellow-300 block">Services</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/about" className="hover:border-b-2 hover:border-yellow-300 block">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
