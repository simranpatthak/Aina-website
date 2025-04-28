import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { gsap } from 'gsap';
import Sidebar from './Sidebar';
import { toggleDarkMode } from '../store/slices/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    gsap.from(".navbar", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar fixed w-full z-50 flex justify-between items-center p-4 transition-all duration-300 ${scrolled ? "shadow-lg py-2 bg-opacity-90" : ""} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-25 h-10" />
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
            <li
              key={index}
              className={`cursor-pointer font-semibold relative group ${darkMode ? 'text-white' : 'text-gray-800'}`}
            >
              {text}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
            </li>
          ))}
          
          <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:scale-110 hover:bg-red-700 transition-all duration-300">
            Get Quote
          </button>

          <button onClick={() => dispatch(toggleDarkMode())} className="text-2xl">
            {darkMode ? <FaSun color="yellow" /> : <FaMoon color="black" />}
          </button>
        </ul>

        <button className="md:hidden text-3xl" onClick={() => setSidebarOpen(true)}>
          <FaBars color={darkMode ? "white" : "black"} />
        </button>
      </nav>

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </>
  );
};

export default Navbar;
