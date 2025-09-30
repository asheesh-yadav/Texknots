import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './index.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img
              src="./img/lg.png"
              alt="Texknots Logo"
              width="240"
              height="90"
            />
          </a>
        </div>
        {/* Desktop nav links */}
        <nav className="nav-links desktop-nav">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </nav>
        {/* Hamburger icon for mobile */}
        <button
          className="hamburger-icon"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>
      {/* Mobile nav links below logo */}
      {menuOpen && (
        <nav className="nav-links mobile-nav">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
