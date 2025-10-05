import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./View.css";
import  { useRef} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import a1 from "./img/a1.jpg";
import a2 from "./img/a2.jpg";
import a3 from "./img/a3.jpg";
import a4 from "./img/a4.jpg";
import a5 from "./img/a5.jpg";
import a6 from "./img/a6.jpg";
import a7 from "./img/a7.jpg";
import a8 from "./img/a8.png";
import a9 from "./img/a9.png";
import a11 from "./img/a11.png";
import a12 from "./img/a12.png";
import a13 from "./img/a13.jpg";
import a14 from "./img/a14.jpg";
import a15 from "./img/a15.jpg";
import a16 from "./img/a16.jpg";
import a17 from "./img/a17.jpg";
import a18 from "./img/a18.jpg";
import a20 from "./img/a20.jpg";
import a21 from "./img/a21.jpg";
import a22 from "./img/a22.jpg";
import a23 from "./img/a23.jpg";
import a24 from "./img/a24.jpg";
import a25 from "./img/a25.jpg";
import a26 from "./img/a26.jpg";
import a27 from "./img/a27.jpg";
import a28 from "./img/a28.jpg";
import a29 from "./img/a29.jpg";
import a30 from "./img/a30.jpg";
import a33 from "./img/a33.jpg";
import a34 from "./img/a34.jpg";
import a35 from "./img/a35.png";

const images = [
  { large: a1, smalls: [a2, a3] },
  { large: a4, smalls: [a5, a6] },
  { large: a7, smalls: [a8, a9] },
  { large: a13, smalls: [a14, a15] },
  { large: a16, smalls: [a17, a18] },
  { large: a12, smalls: [a20, a21] },
  { large: a22, smalls: [a23, a24] },
  { large: a25, smalls: [a26, a27] },
  { large: a28, smalls: [a29, a30] },
  { large: a11, smalls: [a11, a33] },
  { large: a34, smalls: [a35, a1] }, 
];


function GallaryView() {
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

export default GallaryView;
