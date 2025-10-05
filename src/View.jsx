import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./View.css";
import  { useRef} from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "bootstrap-icons/font/bootstrap-icons.css";

import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";
import img9 from "./img/img9.png";
import img10 from "./img/img10.png";
import img11 from "./img/img11.jpg";
import img12 from "./img/img12.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
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

        {/* Arrows */}
        <div className="viewer-arrow left" onClick={prevImage} >    <ArrowBackIosNewIcon fontSize="inherit" /></div>

        <div className="viewer-image">
          <img src={images[currentIndex]} alt={`img-${currentIndex}`} />
        </div>

        <div className="viewer-arrow right" onClick={nextImage}>   <ArrowForwardIosIcon fontSize="inherit" /></div>
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
