
import React from 'react';


const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <a href="https://www.texknots.com">
            <img
              src="https://static.wixstatic.com/media/9e0242_59f3467c2dd4433699d746ceb8fb5192~mv2.png/v1/fill/w_240,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20texknots.png"
              alt="Texknots Logo"
              width="240"
              height="90"
            />
          </a>
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
