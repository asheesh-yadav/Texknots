import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
};

// Pure black & white grayscale style
const blackWhiteStyle = [
  { elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#000000" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#d6d6d6" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#d6d6d6" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
];

const center = { lat: 28.620843835155926, lng: 77.36400325821907 }; // Sector 59, Noida

function MyMap() {
  const [mapType, setMapType] = useState("roadmap");

  return (
    <LoadScript googleMapsApiKey="AIzaSyCuSYZDcUhTaltabUgj7UWoKkNP3jGcsV4">
      <div style={{ position: "relative" }}>
        {/* Toggle Buttons */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 10,
            display: "flex",
            gap: "8px",
            backgroundColor: "#fff",
            padding: "6px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <button
            onClick={() => setMapType("roadmap")}
            style={{
              padding: "6px 12px",
              cursor: "pointer",
              backgroundColor: mapType === "roadmap" ? "#007bff" : "#fff",
              color: mapType === "roadmap" ? "#fff" : "#000",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            Map
          </button>
          <button
            onClick={() => setMapType("satellite")}
            style={{
              padding: "6px 12px",
              cursor: "pointer",
              backgroundColor: mapType === "satellite" ? "#007bff" : "#fff",
              color: mapType === "satellite" ? "#fff" : "#000",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            Satellite
          </button>
        </div>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          mapTypeId={mapType}
          options={{
            styles: blackWhiteStyle,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
        >
          {/* Red marker at Sector 59 */}
          <Marker
            position={center}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            }}
          />
        </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default MyMap;
