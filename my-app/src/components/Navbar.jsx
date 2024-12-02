// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); 


  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); 
    } else {
      setIsVisible(true); 
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
      
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={`fixed w-full z-10 text-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div>
        <div className="flex flex-row justify-between p-2.5 md:px-32 px-7 bg-backgroundColor">
          <div className="flex flex-row items-center cursor-pointer ml-10">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-bold font-sans">FAMS CARE</h1>{" "}
              <span>Solusi Kesehatan Keluarga</span>
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" text-blue-800 hover:text-white transition-all cursor-pointer no-underline"
            >
              Home
            </Link>
            <Link
              to="/service"
              spy={true}
              smooth={true}
              duration={500}
              className="text-blue-800 hover:text-white transition-all cursor-pointer no-underline"
            >
              Our Service
            </Link>
            <Link
              to="/galeri"
              spy={true}
              smooth={true}
              duration={500}
              className="text-blue-800 hover:text-white transition-all cursor-pointer no-underline"
            >
              Galery
            </Link>
            <Link
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-blue-800 hover:text-white transition-all cursor-pointer no-underline"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              smooth={true}
              duration={500}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer no-underline"
            >
              Contact Us
            </Link>
          </nav>
        </div>
        
        <div
          className={`lg:hidden flex flex-col items-center bg-backgroundColor ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <Link
            to="/home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white py-2 px-4 hover:text-red-500 transition-all cursor-pointer no-underline"
          >
            Home
          </Link>
          <Link
            to="/service"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white py-2 px-4 hover:text-red-500 transition-all cursor-pointer no-underline"
          >
            Our Service
          </Link>
          <Link
            to="/geleri"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white py-2 px-4 hover:text-red-500 transition-all cursor-pointer no-underline"
          >
            Galery
          </Link>
          <Link
            to="/about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white py-2 px-4 hover:text-red-500 transition-all cursor-pointer no-underline"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            smooth={true}
            duration={500}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer no-underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
