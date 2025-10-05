import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./View.css";
import  { useRef} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const images = [
  "https://static.wixstatic.com/media/9e0242_8a7cc290eec8447b9513daa32e27d553~mv2.png/v1/fit/w_1260,h_223,q_90,enc_avif,quality_auto/9e0242_8a7cc290eec8447b9513daa32e27d553~mv2.png",
  "https://static.wixstatic.com/media/9e0242_00d41994bd5041668e29c1180fad12a2~mv2.jpg",
  "https://static.wixstatic.com/media/9e0242_11ce4d7ff67145669f863be1ef013858~mv2.jpg",
  "https://static.wixstatic.com/media/9e0242_4c26d1baa4804057b0b4a655a7d56ca8~mv2.jpg"
];

function View() {
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

export default View;
