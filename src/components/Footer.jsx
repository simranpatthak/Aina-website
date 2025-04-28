import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <footer className={`w-full py-6 text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <p>© 2025 AINA Technologies. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
