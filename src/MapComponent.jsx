import React, { useState } from "react";

const MapComponent = () => {
  const [isSatellite, setIsSatellite] = useState(false);

  const toggleMap = () => setIsSatellite((prev) => !prev);

  const mapSrc = isSatellite
    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14011.089758241566!2d77.36400325821907!3d28.620843835155926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1&layer=c&cbll=28.620843835155926,77.36400325821907"
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14011.089758241566!2d77.36400325821907!3d28.620843835155926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1";

  return (
    <div className="map-wrapper" style={{ position: "relative", width: "100%" }}>
      <button
        onClick={toggleMap}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 5,
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        {isSatellite ? "Default" : "Satellite"}
      </button>

      <iframe
        title="Map"
        src={mapSrc}
        width="100%"
        height="450"
        style={{
          border: 0,
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
