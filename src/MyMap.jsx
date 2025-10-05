
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Map container size
const containerStyle = {
  width: "100%",
  height: "450px",
};

// Centered on Sector 59, Noida
const center = { lat: 28.620843835155926, lng: 77.36400325821907 };

const blackWhiteStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }],
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#000000" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
];

function MyMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAHy3BDJsIf0g2iUIklk-hwlNJHM5kkHAM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        mapTypeId="roadmap"
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
    </LoadScript>
  );
}

export default MyMap;




















// import React, { useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// // Map container size
// const containerStyle = {
//   width: "100%",
//   height: "450px",
// };

// // Center on Noida Sector 59
// const center = { lat: 28.620843835155926, lng: 77.36400325821907 };

// // Full grayscale style (black & white)
// const blackWhiteStyle = [
//   { elementType: "all", stylers: [{ saturation: -100 }] },
//   { elementType: "geometry", stylers: [{ color: "#ffffff" }] },
//   { elementType: "labels.text.fill", stylers: [{ color: "#000000" }] },
//   { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
//   {
//     featureType: "administrative",
//     elementType: "geometry",
//     stylers: [{ visibility: "on" }, { color: "#dcdcdc" }],
//   },
//   {
//     featureType: "poi",
//     elementType: "geometry",
//     stylers: [{ visibility: "on" }, { color: "#eeeeee" }],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "geometry",
//     stylers: [{ color: "#d6d6d6" }],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [{ color: "#f5f5f5" }],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "geometry",
//     stylers: [{ color: "#e0e0e0" }],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry",
//     stylers: [{ color: "#d6d6d6" }],
//   },
//   {
//     featureType: "transit",
//     elementType: "geometry",
//     stylers: [{ color: "#dddddd" }],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [{ color: "#c9c9c9" }],
//   },
// ];

// function MyMap() {
//   const [mapType, setMapType] = useState("roadmap");

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCuSYZDcUhTaltabUgj7UWoKkNP3jGcsV4">
//       <div style={{ position: "relative" }}>
//         {/* Toggle Buttons */}
//         <div
//           style={{
//             position: "absolute",
//             top: "10px",
//             left: "10px",
//             zIndex: 10,
//             display: "flex",
//             gap: "8px",
//             backgroundColor: "#fff",
//             padding: "6px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         >
//           <button
//             onClick={() => setMapType("roadmap")}
//             style={{
//               padding: "6px 12px",
//               cursor: "pointer",
//               backgroundColor: mapType === "roadmap" ? "#000" : "#fff",
//               color: mapType === "roadmap" ? "#fff" : "#000",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           >
//             Map
//           </button>
//           <button
//             onClick={() => setMapType("satellite")}
//             style={{
//               padding: "6px 12px",
//               cursor: "pointer",
//               backgroundColor: mapType === "satellite" ? "#000" : "#fff",
//               color: mapType === "satellite" ? "#fff" : "#000",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//             }}
//           >
//             Satellite
//           </button>
//         </div>

//         {/* Google Map */}
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={16}
//           mapTypeId={mapType}
//           options={{
//             styles: blackWhiteStyle,
//             streetViewControl: false,
//             mapTypeControl: false,
//             fullscreenControl: true,
//           }}
//         >
//           {/* Red Marker */}
//           <Marker
//             position={center}
//             icon={{
//               url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//             }}
//           />
//         </GoogleMap>
//       </div>
//     </LoadScript>
//   );
// }

// export default MyMap;
