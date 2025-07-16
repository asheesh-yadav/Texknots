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
              src="https://static.wixstatic.com/media/9e0242_59f3467c2dd4433699d746ceb8fb5192~mv2.png/v1/fill/w_240,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20texknots.png"
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
