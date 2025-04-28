import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/slices/themeSlice';
import {motion} from "framer-motion"
const Sidebar = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.theme.darkMode);

  if (!open) return null;

  return (
    <motion.div 
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={`fixed top-0 left-0 w-2/3 h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-50 p-6 flex flex-col gap-6`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-red-600">AINA</h2>
        <FaTimes className="text-2xl cursor-pointer" onClick={() => setOpen(false)} />
      </div>

      {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
        <div key={index} className="font-semibold text-lg cursor-pointer" onClick={() => setOpen(false)}>
          {text}
        </div>
      ))}
      
      <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-full hover:scale-110 transition-transform">
        Get Quote
      </button>

      <button onClick={() => dispatch(toggleDarkMode())} className="mt-6 text-2xl">
        {darkMode ? '🌞' : '🌜'}
      </button>
    </motion.div>
  );
};

export default Sidebar;
