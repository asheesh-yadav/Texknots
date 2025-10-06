import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./View.css";

// ✅ Only large images array (matching your gallery)
import a1 from "./img/a1.jpg";
import a4 from "./img/a4.jpg";
import a7 from "./img/a7.jpg";
import a13 from "./img/a13.jpg";
import a16 from "./img/a16.jpg";
import a12 from "./img/a12.png";
import a22 from "./img/a22.jpg";
import a25 from "./img/a25.jpg";
import a28 from "./img/a28.jpg";
import a11 from "./img/a11.png";
import a34 from "./img/a34.jpg";

const largeImages = [
  a1, a4, a7, a13, a16, a12, a22, a25, a28, a11, a34
];

function GallaryLarge() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [likedImages, setLikedImages] = useState({});

  // Set the current image index based on URL param
  useEffect(() => {
    const index = parseInt(id);
    if (!isNaN(index) && index >= 0 && index < largeImages.length) {
      setCurrentIndex(index);
    }
  }, [id]);

  // Navigate to next/previous large image
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % largeImages.length);
  };
  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? largeImages.length - 1 : prev - 1));
  };

  // Toggle like for current image
  const toggleLike = () => {
    setLikedImages((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex],
    }));
  };

  const heartStyle = {
    cursor: "pointer",
    fontSize: "16px",
    color: likedImages[currentIndex] ? "red" : "black",
    marginLeft: "8px",
    transition: "color 0.3s ease",
  };

  return (
    <>
      <div className="viewer-container">
        {/* Top Left Icons */}
        <div className="viewer-icons top-left">
          <span title="Zoom" onClick={() => setIsZoomed(true)}>⛶</span>
          <span onClick={toggleLike}>
            <i
              className={`bi ${likedImages[currentIndex] ? "bi-heart-fill" : "bi-heart"}`}
              style={heartStyle}
            ></i>
          </span>
        </div>

        {/* Top Right Close */}
        <div className="viewer-icons top-right">
          <span
            title="Close"
            onClick={() => navigate(-1)}
            style={{
              cursor: "pointer",
              fontSize: "40px",
              fontWeight: "100",
              position: "absolute",
              top: "5px",
              right: "5px",
              color: "#000",
            }}
          >✕</span>
        </div>

        {/* Left Arrow */}
        <div className="viewer-arrow left" onClick={prevImage}>❮</div>

        {/* Main Image */}
        <div className="viewer-image">
          <img src={largeImages[currentIndex]} alt={`Large ${currentIndex}`} />
        </div>

        {/* Right Arrow */}
        <div className="viewer-arrow right" onClick={nextImage}>❯</div>
      </div>

      {/* Zoom Overlay */}
      {isZoomed && (
        <div className="zoom-overlay" onClick={() => setIsZoomed(false)}>
          <img src={largeImages[currentIndex]} alt="Zoomed" className="zoomed-img" />
        </div>
      )}
    </>
  );
}

export default GallaryLarge;
