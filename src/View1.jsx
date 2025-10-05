import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./View.css";
import  { useRef} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import i1 from "./img/i1.png";
import i2 from "./img/i2.png";
import i3 from "./img/i3.png";
import i5 from "./img/i5.png";
import i6 from "./img/i6.png";
import i7 from "./img/i7.png";
import i8 from "./img/i8.png";
import i9 from "./img/i9.png";
import i10 from "./img/i10.png";
import i11 from "./img/i11.png";
import i12 from "./img/i12.png";

const images = [i1, i2, i3, i5, i6, i7, i8, i9, i10, i11, i12];


function View1() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(parseInt(id));
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };



   const sliderRef = useRef();
    const scroll = (scrollOffset) => {
       sliderRef.current.scrollBy({
         left: scrollOffset,
         behavior: "smooth"
       });
     };
   
       const [liked, setLiked] = useState(false);
       const heartStyle = {
         cursor: "pointer",
         fontSize: "16px",
         color: liked ? "red" : "black",
         marginLeft: "8px",
         transition: "color 0.3s ease",
       };

  return (
    <>
      <div className="viewer-container">
        {/* Top Left */}
        <div className="viewer-icons top-left">
          <span title="Open Fullscreen" onClick={() => setIsZoomed(true)}>⛶</span>
            <span
                  className="d-inline-flex align-items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLiked(!liked); 
                  }}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  <i
                    className={`bi ${liked ? "bi-heart-fill" : "bi-heart"}`}
                    style={heartStyle}
                  ></i>
                </span>
        </div>

        {/* Top Right */}
        <div className="viewer-icons top-right">
          <span title="Close" onClick={() => navigate(-1)}>✕</span>
        </div>

        {/* Arrows */}
        <div className="viewer-arrow left" onClick={prevImage}>❮</div>

        <div className="viewer-image">
          <img src={images[currentIndex]} alt={`img-${currentIndex}`} />
        </div>

        <div className="viewer-arrow right" onClick={nextImage}>❯</div>
      </div>

      {/* Zoom Overlay */}
      {isZoomed && (
        <div className="zoom-overlay" onClick={() => setIsZoomed(false)}>
          <img src={images[currentIndex]} alt="Zoomed" className="zoomed-img" />
        </div>
      )}
    </>
  );
}

export default View1;
