import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <div className={`transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
