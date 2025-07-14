import React from 'react';

const Export = () => {
  return (
    <div className="export-section">
      <p className="export-title">Export</p>
      <div className="underline"></div>
      <p className="export-subtext">
        We currently export to the following countries and are growing rapidly every season.
      </p>

      <div className="export-map-container">
        <div className="export-stats">
          <p>France 40%</p>
          <p>USA 25%</p>
          <p>Spain 20%</p>
          <p>Rest 15%</p>
        </div>
        <img src= "https://static.wixstatic.com/media/9e0242_036aec7a1d2d451ab3c951151ea60ee8~mv2.png/v1/fill/w_553,h_276,al_c,lg_1,q_85,enc_avif,quality_auto/Digital%20World%20Map_edited.png" alt="World Map" className="world-map" />
      </div>
    </div>
  );
};

export default Export;
