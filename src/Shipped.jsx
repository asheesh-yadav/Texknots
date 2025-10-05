import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Shipped = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

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
            <div
              className="slider-item"
              key={index}
              onClick={() => navigate(`/view1/${index}`)}
            >
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

export default Shipped;
