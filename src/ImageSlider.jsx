import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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


const ImageSlider = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();

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
      color: liked ? "red" : "white",
      marginLeft: "8px",
      transition: "color 0.3s ease",
    };

  return (
    <section className="slider-section">
      <div className="slider-wrapper">
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={() => scroll(-300)}>
          <span className="arrow-icon">❮</span>
        </button>

        {/* Slider Images */}
        <div className="slider-container" ref={sliderRef}>
          {images.map((img, index) => (
            <div className="slider-item" key={index} onClick={()=> navigate(`/view/${index}`)}>
              <img src={img} alt={`Slide ${index}`} />
              <div className="overlay">
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
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={() => scroll(300)}>
          <span className="arrow-icon">❯</span>
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
